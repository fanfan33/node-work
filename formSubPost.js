var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//创建application/x-www-form-urlencoded编码解析
var urlencodedParser = bodyParser.urlencoded({extended: false});

app.get('/index.html',function(req,res){
    res.sendfile(__dirname+"/index.html");
})
app.post('/process_post',urlencodedParser,function(req,res){
    // 输出 JSON 格式
    var response = {
        "first_name":req.body.first_name,
        "last_name":req.body.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
})


var serverStart = app.listen(8082,function(req,res){
    var hostname = serverStart.address().address
    var portcode = serverStart.address().port
   
    console.log("应用实例，访问地址为 http://%s:%s", hostname, portcode);
})