
var mysql = require('mysql');
var connection = mysql.createConnection({
  host : 'mysql-app',	//mysql container name
  user : 'testuser',
  password : 'test',
  database : 'test_database'
});

connection.connect();

console.log(connection.state);

connection.query('select 1+1 as solution', function(err, result,fields){
  if (err) throw err;
  console.log(result[0].solution);
})

/*
var express = require('express');
var app = express();
console.log('hello')
app.get('/',function(req, res){
  var sql = require('mssql');
  var config = {
   server : 'mysql-app',	//mysql container name
   user : 'testuser',
   password : 'test',
   database : 'test_database' 		
  }
  sql.connect(config, function(err){
  if(err) console.log(err);
  console.log('connected')
    request.query('select * from Student',function (err,recordset){
      if(err) console.log(err)
      //res.send(recordset);
      console.log(recordset)
    });
  });
});
*/
