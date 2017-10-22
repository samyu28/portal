const express = require('express')
const router = express.Router()
const bpmhome = 'http://localhost:8080/jbpm-console/rest/'
const request = require('request')
const bpmreq = request.defaults({
    headers: {
        'accept': 'application/json'
    },
    auth: {
        username: 'admin',
        password: 'admin'
    }
})

function TaskSummary() {
    this.processId = 0
    this.taskId = 0
    this.name = ''
    this.priority = 0
    this.submitter = ''
    this.status = ''
    this.startTime = 0
}

router.get('/task', function (req, res, next) {

    // query tasks from backend JBPM
    bpmreq.get(bpmhome + '/task/query?potentialOwner=admin', function (error, response, body) {

        if (error) {
            console.log('Task Query Failed:', error)
            res.send(error)
        }
        console.log(body)

        var json = JSON.parse(body)
        if (!json.hasOwnProperty('taskSummaryList')) {
            res.status(500).send('System Error')
        }

        var inputTS = json['taskSummaryList']
        var outputTS = []
        for (var i = 0; i < inputTS.length; i++) {

            // filter JPBM standard tasks
            if (inputTS[i]['deployment-id'].includes('guvnor')) {
                continue
            }

            var ts = {
                'processId': inputTS[i]['process-session-id'],
                'taskId': inputTS[i]['id'],
                'name': inputTS[i]['subject'],
                'priority': inputTS[i]['priority'],
                'submitter': inputTS[i]['created-by'],
                'status': inputTS[i]['status'],
                'startTime': inputTS[i]['created-on']
            }
            outputTS.push(ts)
        }

        console.log(outputTS)
        res.json(outputTS)
    })
})

router.get('/task/:id', function (req, res, next) {

    bpmreq.get(bpmhome + '/task/' + req.params.id + '/content', function (error, response, body) {
        if (error) {
            console.log('Task Claim Failed:', error)
            res.send(error)
        }

        var json = JSON.parse(body)
        if (!json.hasOwnProperty('contentMap')) {
            res.status(500).send('System Error')
        }

        console.log(json['contentMap'])
        res.send(json['contentMap'])
    })
})

router.post('/task/:id/complete', function (req, res, next) {

    // TODO: Accept user updated form parameters

    // Claim Task
    bpmreq.post(bpmhome + '/task/' + req.params.id + '/claim', function (error, response, body) {
        if (error) {
            console.log('Task Claim Failed:', error)
            // TODO:
            // When a task has only one potential owner, then task is auto-claimed and claim call would fail.
            // In such cases ONLY, ignore claim errors
        }
    })

    // Start Task
    bpmreq.post(bpmhome + '/task/' + req.params.id + '/start', function (error, response, body) {
        if (error) {
            console.log('Task Start Failed:', error)
            // rollback
            bpmreq.post(bpmhome + '/task/' + req.params.id + '/release', function (error, response, body) { })
            res.send(error)
        }
    })

    bpmreq.post(bpmhome + '/task/' + req.params.id + '/complete', function (error, response, body) {
        if (error) {
            console.log('Task Start Failed:', error)
            // rollback start and claim
            bpmreq.post(bpmhome + '/task/' + req.params.id + '/stop', function (error, response, body) { })
            bpmreq.post(bpmhome + '/task/' + req.params.id + '/release', function (error, response, body) { })
            res.send(error)
        }
    })
})

router.post('/task/:id/reject', function (req, res, next) {
    // TODO
})

module.exports = router
