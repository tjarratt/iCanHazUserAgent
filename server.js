var express = require("express");
var app = express.createServer(express.compiler({src: __dirname, enable: ["sass"]}));
var util = require("util");

app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/views");
app.set("view engine", "jade");
app.listen(8080);

app.get("/", function(request, response) {
  util.puts("got a visitor at " + (new Date()));
  util.puts(request.headers['user-agent']);
  response.render("index", {useragent: request.headers['user-agent'].toString()});
});
