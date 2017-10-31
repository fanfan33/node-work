// var fs = require('fs');
// var readSt = fs.createReadStream('input.txt');
// var writeSt = fs.createWriteStream('output.txt');
// readSt.pipe(writeSt);
// console.log('管道流写入完毕!');

var fs = require('fs');
var zlib = require('zlib');
// fs.createReadStream('input.txt')
//     .pipe(zlib.createGzip())
//     .pipe(fs.createWriteStream('input.txt.gz'));
// console.log('文件压缩完毕！');

fs.createReadStream('input.txt.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('input.txt'));
console.log('文件解压完毕！');



// var fs = require('fs');
// var data = '';
// var readStream = fs.createReadStream('input.txt');
// readStream.setEncoding('UTF8');

// readStream.on('data',function(chunk){
//     data += chunk;
//     console.log('0000')
// })
// readStream.on('end',function(){
//     console.log(data);
// })
// readStream.on('error',function(err){
//     console.log(err.stack);
// })

// var writeData = 'hello I\'m writing here!';
// var writeStream = fs.createWriteStream('input.txt');
// writeStream.write(writeData,'UTF8');
// writeStream.end();
// writeStream.on('finish',function(){
//     console.log('文件写入完成！');
// })