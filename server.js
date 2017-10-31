var http = require("http");
var url = require('url');
var util = require('util');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/plain'});
    res.end(util.inspect(url.parse(req.url)));
}).listen(8888);
console.log('Server running at http://127.0.0.1:8888/');