var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var formidable = require('formidable');
app.use('/status', express.static("./static"))
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/home', function (req, res) {
    res.send("默认路径")
    // console.log(req.body);

    var form = new formidable.IncomingForm();

    form.parse(req, function (err, fields, files) {
        console.log(fields);
        console.log(files);
    });

    return;
})
app.get('/home/:datas', function (req, res) {
    res.send(req.params.datas);
    console.log(req.query.id);
})
app.get('/ajaxTest', function (req, res) {
    let js = {
        asd: '123',
        zxc: '3333',
    }
    res.send(js);
})

app.use(function (req, res) {
    res.send("404")
})

app.listen(3000, '192.168.0.69')