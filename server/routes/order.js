
const express = require('express')
const router = express.Router()
const mongojs = require('mongojs')
const request = require('request')
const formdata = require('form-data')

const db = mongojs('mongodb://admin:admin@127.0.0.1/orders')
const bpmhome = 'http://localhost:8080/jbpm-console/rest/'

const bpmreq = request.defaults({
    headers: {
        'accept': 'application/json',
    },
    auth: {
        username: 'admin',
        password: 'admin'
    }
})

router.get('/order', function (req, res, next) {
    db.orders.find(function (err, orders) {
        if (err) {
            res.send(err)
        }
        res.json(orders)
    })
})

router.get('/order/:id', function (req, res, next) {
    db.orders.findOne({ _id: mongojs.ObjectId(req.params.id) }, function (err, order) {
        if (err) {
            res.send(err)
        }
        res.json(order)
    })
})

router.post('/order', function (req, res, next) {
    var order = req.body
    console.log(JSON.stringify(order))

    // TODO: store order in Mongo Order DB before forwarding to JBPM

    // huh! hardcoded demo process
    // TODO: read JBPM OU, Package Name, Version, and Process Definition ID from Catalog DB
    // /rest/runtime/OU:Package:Version/custom/process/Package.ProcessDefId/start

    var form = {
        map_p_process_data: JSON.stringify(order)
    }

    bpmreq.post({
        url: bpmhome + '/runtime/CiscoAS-SIO:L2VPN:1.0/custom/process/L2VPN.Day0_New_Provisioning/start',
        formData: form
    }, function (error, response, body) {

        if (error) {
            console.log('Failed to start Order Process:', error)
            res.send(error)
        }
        console.log(body)
        res.send(order);
    })
})

module.exports = router
