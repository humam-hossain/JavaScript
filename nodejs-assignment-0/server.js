const express = require("express")

const app = express();
const bodyParser = require("body-parser");

const users = [];

app.use(bodyParser.urlencoded({ extended: false}))

app.set("view engine", "ejs");
app.set("views", "views");

app.get("/", (req, res, next) => {
    res.render("index", { pageTitle: "Add User" });
});

app.get("/users", (req, res, next) => {
    res.render("users", { pageTitle: "User", users: users});
});

app.post("/add-user", (req, res, next) => {
    users.push({username: req.body.username});
    res.redirect("/users");
});


app.listen(3000);