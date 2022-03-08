const express = require("express");
const app = express();
const PORT = process.env.PORT || 3030;
app.get("/", (req, res) => {
  res.send(`브로넥스 홈페이지`);
});

app.listen(PORT, () => {
  console.log(`Server On : http://localhost:${PORT}/`);
});
