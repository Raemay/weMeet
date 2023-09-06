// database.js
const mysql = require('mysql2/promise');

async function connectToDatabase() {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'melanie',
    password: 'WCS1234',
    database: 'weMeet',
  });
  return connection;
}

module.exports = { connectToDatabase };
