const mysql = require('mysql');
const db = require('../db/mysql');

const showdata = (req,res) =>{
    const con = mysql.createConnection({
        host: db.host,
        user: db.user,
        password: db.pass,
        database: db.dbname
    });
    con.connect((err)=>{
        if(err){
            console.log(err);
            console.log("Can't not connected database!!!");
        }else{
            console.log('connected database');
            let sql = `select * from ${db.table}`;
            con.query(sql,(err,result)=>{
                if(err){
                    console.log(err);
                    console.log("Can't Show data base");
                }else{
                    console.log('qury success!!');
                    console.log('show data');
                    res.render('showdata',{
                        data:{
                            pageName:'Showdata',
                            result:result,
                        }
                    });
                }
            });
        }
    });
}
module.exports.showdata = showdata;