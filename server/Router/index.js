const express = require("express");
const mysql = require("mysql");
const router = express.Router();
const bodyParser = require("body-parser");
const { urlencoded } = require("body-parser");

const db = mysql.createPool({
  host: "broanex-test.ctujfjmdd0pi.ap-northeast-2.rds.amazonaws.com",
  user: "minjeong",
  password: "asd134652",
  database: "sample",
  port: "3310",
  connectionLimit: 66,
  waitForConnections: true,
});

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get("/getNewsList", (req, res) => {
  const sqlQuery = "SELECT * FROM sample.news;";
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

//불러오는 주소
router.get("/getNewsPost", (req, res) => {
  // sql query 문
  const sql = "SELECT * FROM sample.news WHERE board_id = ?";
  // 전달받은 parameter 값
  const params = req.query.board_id;
  db.query(sql, params, (err, data) => {
    if (!err) {
      res.send(data);
    } else {
      res.send(err);
    }
  });
});

module.exports = router;
