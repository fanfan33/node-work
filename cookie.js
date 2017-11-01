var express = require('express');
// var cookieParser = require('cookie-parser');
var app = express();
// app.use(cookieParser());
var fs = require('fs');

app.get('/listUsers',function(req,res){
    fs.readFile(__dirname+"/user.json",'utf8',function(err,data){
        res.end(data);
    })
})
app.get('/user/:id',function(req,res){
    fs.readFile(__dirname+"/user.json",function(err,data){
        var con = JSON.parse(data);
        var user = con["user"+req.params.id];
        res.end(JSON.stringify(user));
    })
})
app.get('/deleteUser',function(req,res){
    fs.readFile(__dirname+"/user.json",function(err,data){
        var con = JSON.parse(data);
        delete con["user"+2];
        res.end(JSON.stringify(con));
    })
})

app.listen(8081,function(){
    console.log('应用实例 start at localhost:8081');
});