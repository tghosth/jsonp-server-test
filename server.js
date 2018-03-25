'use strict';

var express = require('express');
var cookieParser = require('cookie-parser')
const basicAuth = require('express-basic-auth')


var app = module.exports = express();
app.use(cookieParser())

// This enables jsonp support
// In this case the callback parameter name will need to be "cb"
app.set("jsonp callback name", "cb");

/*
API #1 - the /dee endpoint
This API will return data if a cookie called "blah" with any value has been set
If the cookie has not been set, it will return an error message and helpfully set the cookie for next time :)
*/
app.get('/dee', function(req, res){ 
  
  var nocookie = true
  
  // Check if the "blah" cookie has been set to something.
  if (req.cookies != undefined)
  {
    if (req.cookies['blah'] != undefined)
    {
      nocookie = false;
    }
  }

  // If the cookie was not found
  if (nocookie)
  {
    // Set the cookie and return an error
    res.cookie("blah", "fred",{})
    res.json("NO COOKIE DETECTED!!!!");
  }
  else
  {
    // Otherwise, return the data.
    // If the cb parameter is populated, this will automatically return in JSONP format.
    res.jsonp("super secret response data dee");
  }
});
// End of the /dee endpoint

/*
API #2 - the /foo endpoint
This API will always return data regardless of what is sent to it.
*/
app.get('/foo', function(req, res){ 
  res.jsonp("super secret response data foo");
});
// End of the /foo endpoint


// This code activates the Basic Authentication request which will apply to all subsequently declared API endpoints
app.use(basicAuth({
  users: { 'admin': 'supersecret' }, 
  challenge: true
}))

/*
API #2 - the /foo endpoint
This API will return data if the basic authentication check has passed. Otherwise it will return a 401 error.
*/
app.get('/bar', function(req, res){ 
    res.jsonp("super secret response data bar");
});
// End of the /bar endpoint


// Start up the server
var listener = app.listen(3000, function(){
  console.log("Express server listening on port %d in %s mode", listener.address().port, app.settings.env); 
});