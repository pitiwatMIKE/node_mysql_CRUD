/*********************************************************************/
//If you don't have a database yet, create a database using the "npm createatabase.js" command.

const mysql = require('mysql');
const db = require('./mysql');

function createDatabase(){
    const con = mysql.createConnection({
        host:db.host,
        user:db.user,
        password:db.password,
    });
    con.connect((err)=>{
        if(err){
            console.log(err);
            console.log("Can't not connect database!!!");
        }else{
            console.log('database connected!');
            let sql = `CREATE DATABASE ${db.dbname};`;
            con.query(sql,(err,result)=>{
                if(err){
                    console.log(err);
                    console.log("Can't not create database");
                }else{
                    console.log(`Create Database "${db.dbname}" success`);
                }
            });
        }
    });
}
createDatabase();