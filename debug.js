var express = require('express')
var parser = require('body-parser')

var port = 9090
var app = express()
app.use(parser.json({ extended: true }))
app.use(parser.urlencoded({ extended: true }))

app.post('/', function (req, res) {
  console.log(req.headers);
  console.log(req.body)
  res.send('Received')
})

app.listen(port, function () {
    console.log('Server started on :' + port)
})