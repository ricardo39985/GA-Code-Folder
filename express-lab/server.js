const express = require("express");
const path = require("path");
const people = require("./db/db");

const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/index", (req, res) => {
  res.render("people/index", {
    people: people.getAll(),
  });
});
app.listen(3000, () => console.log("Listening on port 3000"));
