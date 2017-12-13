var express = require("express");
var path = require("path");

var PORT = 80;
var app = express();

app.use(express.static(path.join(__dirname, "./public")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT);
console.log("service start" + PORT);
