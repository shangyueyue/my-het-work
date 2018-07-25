const db = require('../../mysql/db');


const sql='select * from user';
const args=[];

function registerAction(req, res, next){
    var param = req.query || req.params;
    db.queryArgs(sql, 
        args, 
        function(err, result) {
            if(!err){
                result = {
                    code: 200,
                    msg:'successful'
                }; 
            }
            // 以json形式，把操作结果返回给前台页面
            db.doReturn(res, result);
        }
    );
}

// exports
module.exports = {
    registerAction
};
