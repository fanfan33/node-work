var http = require("http");
var url = require('url');
var util = require('util');

// http.createServer(function(req,res){
//     res.writeHead(200,{'Content-type':'text/plain'});
//     res.end(util.inspect(url.parse(req.url)));
// }).listen(8888);

var querystring = require('querystring');
var postHTML = 
    '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
    '<body>' +
    '<form method="post">' +
    '网站名： <input name="name"><br>' +
    '网站 URL： <input name="url"><br>' +
    '<input type="submit">' +
    '</form>' +
    '</body></html>';
http.createServer(function(req,res){
    var post = '';

    req.on('data',function(chunk){
        post += chunk;
    })
    req.on('end',function(){
        post = querystring.parse(post);
        res.writeHead(200,{'Content-Type':'text/html;charset=utf8'});

        if (post.name && post.url) {
            res.write('网站名：'+ post.name);
            res.write("<br>");
            res.write("网站 URL：" + post.url);
        } else {
            res.write(postHTML);
        }

        res.end();
    })
}).listen(8888);

console.log('Server running at http://127.0.0.1:8888/');