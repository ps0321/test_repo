var express = require('express');
var app = express();

app.get('/', function (req, res) {
  console.log(req);
  res.send('Hello world!!');
  console.log(res);
});

app.listen(3000, function() {
  console.log('Server On!!');
});
