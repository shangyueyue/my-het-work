
const express =require('express');
const router=express.Router();

router.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
router.use(function (req, res, next) {
    console.log('Time:', Date.now());
    next();
});


router.get('/', function(req, res, next) {
    console.log(req.query,1111)
    res.send('shangyy111')
    // res.render('index', { title: 'Express' });
});


module.exports=router;