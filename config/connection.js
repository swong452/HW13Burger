var mysql = require("mysql");

// var connection;
// if (process.env.JAWSDB_URL) {
//     connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
//     connection = mysql.createConnection ({
//         host:'localhost',
//         user:'root',
//         password:'hacktheplanet',
//         database:'todoagain_db'
//     })
// }

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