var express = require("express"),
      app = express();

var connection = null;
app.get("/", function (req, res) {
  res.send("Welcome 2 Shippable");
});

app.listen(3000, function () {
  console.log('Express listening on port 3000');
});
