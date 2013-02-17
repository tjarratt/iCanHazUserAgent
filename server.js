var express = require("express");
var app = express.createServer(express.compiler({src: __dirname, enable: ["sass"]}));
var util = require("util");

app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/views");
app.set("view engine", "jade");

var port = process.env.PORT || 8080;
console.log("listening on port " + port);
app.listen(port);

app.get("/", function(request, response) {
  util.puts("got a visitor at " + (new Date()));
  util.puts(request.headers['user-agent']);
  var ua = request.headers['user-agent'];
  ua = ua ? ua.toString() : "";
  response.render("index", {useragent: ua});
});
