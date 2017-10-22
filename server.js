
var express = require('express')
var path = require('path')
var parser = require('body-parser')

var index = require(path.join(__dirname, '/server/routes/index'))
var catalog = require(path.join(__dirname, '/server/routes/catalog'))
var order = require(path.join(__dirname, '/server/routes/order'))
var task = require(path.join(__dirname, '/server/routes/task'))

var port = 8090
var app = express()

app.set('views', path.join(__dirname, '/server/views'))
app.set('view engine', 'ejs')
app.engine('html', require('ejs').renderFile)

app.use(express.static(path.join(__dirname, 'orch-app/dist')))
app.use(parser.json({ extended: true }))
app.use(parser.urlencoded({ extended: true }))

app.use('/', index)
app.use('/catalog-api', catalog)
app.use('/order-api', order)
app.use('/task-api', task)

app.listen(port, function () {
    console.log('Server started on :' + port)
})
