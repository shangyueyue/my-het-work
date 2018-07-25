var mysql = require('mysql');
var pool  = mysql.createPool({
  user     : 'root',
  password : 'HpFGtAGeBQsrhF9dok6Fl',
  database : 'mytest'
});
 


module.exports=pool;
