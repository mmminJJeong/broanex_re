var express = require("express");
var cors = require("cors");

var news = require("./Router/boardNews");
var index = require("./Router/index");
var notice = require("./Router/boardNotice");
var noticeIndex = require("./Router/noticeIndex");

var app = express();
app.use(cors());

app.use("/", news);
app.use("/news", index);
app.use("/api/notice", notice);
app.use("/notice", noticeIndex);

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => console.log(`running on port ${PORT}`));

module.exports = app;
