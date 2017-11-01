var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: '3306',
    database: 't1'
});

connection.connect();
//query
var queryStr = 'SELECT * FROM websites';
//add
var addSql = 'INSERT INTO websites(id,name,url,alexa,country) VALUES(0,?,?,?,?)';
var addSqlParams = ['菜鸟工具','http://c.runoob.com','23453','CN'];
//update
var modSql = 'UPDATE websites SET name = ?,url = ? where id = ?';
var modSqlParams = ['菜鸟移动站','www.m.runoob.com',6];

connection.query(modSql, modSqlParams, function(error,results,fields) {
    if (error) {
        console.log('select error',error.message);
        return;
    }
    console.log('--------------------------SELECT----------------------------');
    // console.log(results);
    console.log(results);
    console.log('------------------------------------------------------------\n\n');  
});

connection.end();