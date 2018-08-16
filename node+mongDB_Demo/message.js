const express = require("express");
const app = express();
const formidable = require('formidable');
const db = require("db");
const timestamp = require('time-stamp');
const fs = require('fs');

app.use(express.static("./static"));

app.get('/', function (req, res) {

})

app.post('/froms', function (req, res) {
    let form = new formidable.IncomingForm();
    form.on('fileBegin', function (name, file) {
        let suffix = file.name.substring(file.name.indexOf('.'));
        file.path = __dirname + '/Upfiles/' + timestamp('YYYYMMDDmmss') + parseInt(Math.random() * 99999) + suffix;
    })

    form.uploadDir = "./Upfiles";
    form.parse(req, function (err, fields, files) {
        // let suffix = files.myfile.name.substring(files.myfile.name.indexOf('.'));
        // let newName = __dirname + '/Upfiles/' + timestamp('YYYYMMDDmmss') + parseInt(Math.random() * 99999) + suffix;
        // let oldName = __dirname + '/' + files.myfile.path;
        // fs.rename(oldName, newName, function (err) {
        //     if (err) throw err;
        //     // db.insertOne('testColle', fields, function () {
        //     //     
        //     // })
        //     // console.log(fields);

        // })
        res.send("secceed")
        

    });
    return;
})



app.listen('192.168.0.69',4000);