
var express = require('express')
var path = require('path')
var router = express.Router()

router.get('/', function (req, res, next) {
    res.render(path.join(__dirname, '../../orch-app/dist/index.html'))
})

module.exports = router
