const mysqldb = require('mysql');
const mdb = mysqldb.createPool({
  host: process.env.AWS_MARIA_URI,
  user:'root',
  password: process.env.AWS_MARIA_PWD,
  database: 'hrr',
  connectionLimit: 3
});

module.exports = mdb;
