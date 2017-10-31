var buf1 = new Buffer([ 119, 119, 119, 46, 114, 117, 110, 111, 111, 98, 46, 99, 111, 109 ]);
console.log(buf1.toString());
var buf2 = new Buffer('冯帆');
console.log(buf2.toJSON());

var buf3 = new Buffer(256);
len = buf3.write("冯帆");
console.log('写入缓冲区的字节数为：'+len);

console.log(buf3.toString());