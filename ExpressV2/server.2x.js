var express = require('express');

var app = module.exports = express.createServer();
// this enables jsonp support
app.enable("jsonp callback");

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

// Now all you need to do is all this API with something like http://localhost:3000/foo?callback=doo
// and it will return a JSONP response.
app.get('/foo', function(req, res){ 
  // important - you have to use the response.json method
  res.json("hello world");
});

app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
