var mysql = require('mysql');

const dbConnection = mysql.createPool({
  host: process.env.AWS_MARIA_URI,
  user:'root',
  password: process.env.AWS_MARIA_PWD,
  database: 'hrr',
  connectionLimit: 3
});

module.exports.dbConnection = dbConnection;
