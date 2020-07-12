const mysql = require('mysql');
const db = require('../db/mysql');

const insert = (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const con = mysql.createConnection({
        host: db.host,
        user: db.user,
        password: db.pass,
        database: db.dbname
    });

    con.connect((err) => {
        if (err) {
            console.log(err);
            console.log("Can't not connected database!!!");
        } else {
            console.log('connected database');
            let sql = `insert into ${db.table} (username, password) values('${username}', '${password}');`;
            con.query(sql, (err, result) => {
                if (err) {
                    console.log(err);
                    console.log("Can't not insert to data!!!");
                } else {
                    console.log("insert success");
                    res.render('register',{
                        data:{
                            pageName:'Register',
                            message:'insert successfully'
                        }
                    });
                }
            });
        }

    });
}
module.exports.insert = insert;