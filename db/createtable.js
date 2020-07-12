/*********************************************************************/
//If you don't have a table yet, create a table using the "npm createatabase.js" command.

const mysql = require('mysql');
const db = require('./mysql');

function createTable(){   
    const con = mysql.createConnection({
        host:db.host,
        user:db.user,
        password:db.password,
        database:db.dbname
    }); 
    con.connect((err)=>{
        if(err){
            console.log(err);
            console.log("Can't not connect database!!!");
        }else{
            let sql = `CREATE TABLE ${db.table}(id int(10) AUTO_INCREMENT PRIMARY KEY, username varchar(30)NOT NULL, password varchar(20) NOT NULL)collate = utf8_unicode_ci;`;
            con.query(sql,(err,result)=>{
                if(err){
                    console.log(err);
                    console.log("Can't not create Table");
                }else{
                    console.log(`Create Table "${db.table}" success`);
                }
            });
        }
    });
}
createTable();