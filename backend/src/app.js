const express = require("express");
const fs = require("fs");
const path = require("path");
const userRouter = require("./routes/users")
const favoriteRouter = require("./routes/favorites")
const userFavoriteRouter = require("./routes/user_has_favorite")

const app = express();
"/static", express.static("public");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://192.168.1.61:8081"); // Remplacez par l'URL de votre front-end
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  next();
});

app.use(express.json());

// Serve the public folder for public resources
app.use(express.static(path.join(__dirname, "../public")));

// Serve REACT APP
app.use(express.static(path.join(__dirname, "..", "..", "frontend", "dist")));

// API routes
app.use("/users", userRouter);
app.use("/favorites", favoriteRouter)
app.use("/userfavorites", userFavoriteRouter)


// ready to export
module.exports = app;