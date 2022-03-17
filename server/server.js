var express = require("express");
var cors = require("cors");
var app = express();
var news = require("./Router/boardNews");
var index = require("./Router/index");
var notice = require("./Router/boardNotice");
var noticeIndex = require("./Router/noticeIndex");

app.use(cors());

app.use("/", news);
app.use("/news", index);
app.use("/image", express.static("./image"));
app.use("/api/notice", notice);
app.use("/notice", noticeIndex);

var port = process.env.PORT || 6000;
app.listen(port, () => console.log(`${port}`));

module.exports = app;
