require('dotenv').config();
const mysql = require('mysql');
const { promisify } = require('util');

const pool = mysql.createPool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
});

pool.getConnection((error, connection) => {
  if (error) throw error;

  if (connection) {
    connection.release();
    console.log('DB is Connected');
  }
});

pool.query = promisify(pool.query);

module.exports = pool;
