'use strict';

var express = require('express');


// var app = module.exports = express.createServer();
var app = module.exports = express();
// this enables jsonp support
app.set("jsonp callback name", "cb");


app.get('/foo', function(req, res){ 
  // important - you have to use the response.json method
  res.jsonp("hello world");
});

var listener = app.listen(3000, function(){
  console.log("Express server listening on port %d in %s mode", listener.address().port, app.settings.env); 
});