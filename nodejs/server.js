// util
const rootDir = require("./util/path");

// controllers
const errorControllers = require("./controllers/error");

// routes
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

// server
const path = require("path");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, "public"))); // publicly accessibile directory

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorControllers.get404);

app.listen(3000);