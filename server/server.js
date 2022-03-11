var express = require("express");
var cors = require("cors");
const router = require("./route");

var app = express();
app.use(cors());

app.use("/", router);

var port = process.env.PORT || 8000;
app.listen(port, () => console.log(`running on port ${port}`));

module.exports = app;
