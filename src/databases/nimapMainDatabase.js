const mysql = require("mysql2");

const conn = mysql.createConnection({
    host : process.env.dbHost,
    password : process.env.dbPass,
    user : process.env.dbUser,
    database : process.env.dbName
});

conn.connect((err)=>{
    if(err){
        console.log("Failed to connect with Database");
    }else{
        console.log("Successfully connect to Database");
    }
});

module.exports = conn;