var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user:"root",
    password:"password",
    database: "burger_db"
});


// Make Connection
connection.connect (function(err) {
    if (err) {
        console.err("error connecting:"+ err.stack);
        return;
    }
    console.log("DB Connection as id" + connection.threadId);
});

module.exports = connection;