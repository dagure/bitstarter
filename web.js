var express = require('express');
var app = express();
app.use(express.logger());

var buffer = new Buffer(25);
buffer = fs.readFileSync("index.html", "utf-8");
var string1 = buffer.toString();

app.get('/', function(request, response) {

  response.send(string1);

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
