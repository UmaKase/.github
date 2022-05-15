
var mysql = require('mysql');
var connection = mysql.createConnection({
  host : 'mysql-app',	//mysql container name
  user : 'testuser',
  password : 'test',
  database : 'test_database'
});

connection.connect();

//if console output "2", connect database successfully
connection.query('select 1+1 as solution', function(err, result,fields){
  if (err) throw err;
  console.log(result[0].solution);
})
