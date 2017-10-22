
var express = require('express')
var router = express.Router()
var mongojs = require('mongojs')
var db = mongojs('mongodb://admin:admin@127.0.0.1/catalogs')

router.get('/catalog', function (req, res, next) {
    db.items.find(function (err, items) {
        if (err) {
            res.send(err)
        }
        res.json(items)
    })
})

router.get('/catalog/:id', function (req, res, next) {
    db.items.findOne({ _id: mongojs.ObjectId(req.params.id) }, function (err, item) {
        if (err) {
            res.send(err)
        }
        res.json(item)
    })
})

module.exports = router
