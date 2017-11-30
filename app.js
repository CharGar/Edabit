//requires
var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('public'));

app.listen(5555, function(){
  console.log('server up on 5555');
});
