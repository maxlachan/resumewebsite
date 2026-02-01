const express = require("express");
const app = express();
const { resolve } = require("path");
const port = process.env.PORT || 3000;

// importing the dotenv module to use environment variables:
require("dotenv").config();

// ------------ Static Portfolio Server ------------

// Setting up the static folder to serve all portfolio files:
app.use(express.static(resolve(__dirname, "./public")));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Main route - serve the portfolio homepage
app.get("/", (req, res) => {
  const path = resolve(__dirname, "./public/index.html");
  res.sendFile(path);
});

// 404 handler - redirect to home
app.get("*", (req, res) => {
  res.redirect("/");
});

// Server listening:
app.listen(port, () => {
  console.log(`✓ Steve Paul Portfolio Server`);
  console.log(`✓ Server listening on port: ${port}`);
  console.log(`✓ Access your portfolio at: http://localhost:${port}`);
});
