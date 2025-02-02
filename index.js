const express = require("express");
const app = express();
const path = require("path");
require("dotenv").config();
const router = require("./data/router/index");
const compression = require("compression");

app.use(express.static(path.join(__dirname, "node_modules/bootstrap/dist/css")));
app.use(express.static(path.join(__dirname, "node_modules/bootstrap/dist/js")));
app.use(express.static(path.join(__dirname, "node_modules/jquery/dist")));
app.use(express.static(path.join(__dirname, "src/public")));
app.set("views", path.join(__dirname, "src/views"));
app.set("view engine", "ejs");

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})

app.use("/", compression(), router);