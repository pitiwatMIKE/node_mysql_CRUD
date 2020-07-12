const mysql = require('mysql');
const db = require('../db/mysql');

const del = (req,res,next)=>{
    const con = mysql.createConnection({
        host:db.host,
        user:db.user,
        password:db.pass,
        database:db.dbname,
    });
    con.connect((err)=>{
        if(err){
            console.log(err);
            console.log("Can't not Connect database!!!");
        }else{
            console.log("Connected database!");
            const id = req.params.id;
            let sql = `delete from ${db.table} where id=${id};`;
            con.query(sql,(err,result)=>{
                if(err){
                    console.log(err);
                    console.log('Error delete!!!');
                }else{
                    console.log('delete success!');
                    next();
                }
            });
        }
    });
}
module.exports.delete = del;