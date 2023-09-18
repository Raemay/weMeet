require("dotenv").config();
const mysql = require("mysql2/promise"); // Utilisez mysql2/promise pour une utilisation asynchrone

const database = mysql.createPool({
  host: "db",
  port: 3306,
  user: "wemeet",
  password: "wemeet",
  database: "wemeet",
});

database
  .getConnection()
  .then(() => {
    console.log("can reach database");
  })
  .catch((err) => {
    console.error(err);
  });

const app = require("./src/app");
const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = database;
