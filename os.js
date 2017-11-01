var http = require('http');
var fs= require('fs');
var urlIt = require('url');
http.createServer(function(req,res){
    var pathname = urlIt.parse(req.url).pathname;

    // 输出请求的文件名
    console.log("Request for " + pathname + " received.");

    fs.readFile(pathname.substr(1),function(err,data){
        if (err) {
            console.log(err);
            res.writeHead(404,{'Content-Type':'text/html'});
        }
        else{
            res.writeHead(200, {'Content-Type': 'text/html'});    
            
            // 响应文件内容
            res.write(data.toString());   
        }
        res.end();
    })
}).listen(8081);
console.log('Server running at http://127.0.0.1:8081/');