const mysql = require('mysql');
const db = require('../db/mysql');

const edit = (req,res,next) =>{
    const con = mysql.createConnection({
        host:db.host,
        user:db.user,
        password:db.password,
        database:db.dbname
    });
    con.connect((err)=>{
        if(err){
            console.log(err);
            console.log("Can't not Connect Database!!!");
        }else{
            const id = req.body.id;
            const username = req.body.username;
            const password = req.body.password;
            console.log("Database connected!");
            let sql = `update ${db.table} set username='${username}', password='${password}' where id = ${id};`;
            con.query(sql,(err,result)=>{
                if(err){
                    console.log(err);
                    console.log('Error edit data!!!');
                }else{
                    console.log('edit data successfully!');
                    next();
                }
            });
        }
    });
}

module.exports.edit = edit;