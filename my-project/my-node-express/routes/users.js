var express = require('express');
var router = express.Router();
const {registerAction} = require('../action/register/registerAction');
console.log(registerAction)
/* GET users listing. */
router.get('/register', function(req, res, next) {
    registerAction(req,res,next)
});

module.exports = router;
