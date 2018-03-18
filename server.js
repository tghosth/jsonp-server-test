'use strict';

var express = require('express');
var cookieParser = require('cookie-parser')
const basicAuth = require('express-basic-auth')


var app = module.exports = express();
app.use(cookieParser())

// this enables jsonp support
app.set("jsonp callback name", "cb");

app.get('/dee', function(req, res){ 
  
  var nocookie = false
  
  if (req.cookies === undefined)
  {
    nocookie = true;
  }
  else if (req.cookies['blah'] === undefined)
  {
    nocookie = true;
  }

  if (nocookie)
  {
    res.cookie("blah", "fred",{})
    res.json("NO COOKIE DETECTED!!!!");
  }
  else
  {
    res.jsonp("super secret response data dee");
  }
});

app.get('/foo', function(req, res){ 
  res.jsonp("super secret response data foo");
});

app.use(basicAuth({
  users: { 'admin': 'supersecret' }, 
  challenge: true
}))

app.get('/bar', function(req, res){ 
    res.jsonp("super secret response data bar");
});

var listener = app.listen(3000, function(){
  console.log("Express server listening on port %d in %s mode", listener.address().port, app.settings.env); 
});