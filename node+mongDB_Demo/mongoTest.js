var express = require("express");
var app = express();
var db = require("db");
app.use(express.static('./static'));



app.get("/", function (req, res) {
    let a = parseInt(Math.random() * 100);
    db.insertOne("teacher", { "name": "棒" + a, "age": 22, "sex": "男", "job": "Creazy" }, function () {
        res.send("成功");
    })
});

app.get("/find", function (req, res) {
    let page = req.query.page || 0;
    db.find("teacher", { "age": { $gt: 20 } }, { pnum: 3, num: page }, function (result) {
        res.send(result);
    });
})

app.get("/delete", function (req, res) {
    let page = req.query.page || 0;

    db.deleteMany("teacher", { "age": 22 }, function () {
        res.send("删除成功");
    });
})

app.post("/test",function (req, res) {
    req.on('data',function(data){
        obj=JSON.parse(data);
        console.log(obj);
        res.send('数据已接收')
    })
   
})
app.get("/test", function (req, res) {
    console.log(req.query.id)
    res.send('ok111')
})


app.listen(3000,'192.168.0.69');
