var express = require('express');
var router = express.Router();
// var pool = require('../mysql/pool');


// pool.getConnection(function(err, connection) {
//   if (err) {
//       console.error('error connecting: ' + err.stack);
//       return;
//     }
//     connection.query('select * from user',function (error, results, fields) {
//       console.log(error);
//       console.log("results",results[0].uname)
//     })
// });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
