var fs = require("fs");
// var data = fs.readFileSync('input.txt');
// console.log(data.toString());
// console.log('code over');

fs.readFile('input.txt',function(err,data){
    if (err) return console.log(err);
    console.log(data.toString());
    console.log("程序结束")
})

var Hello = require('./module');
var hello  = new Hello();
hello.setName('fanfan33');
console.log(hello.getName());