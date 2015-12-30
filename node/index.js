var express = require('express'),
    http = require('http'),
    redis = require('redis');

var app = express();

// APPROACH 2: Using host entries created by Docker in /etc/hosts (RECOMMENDED)
var client = redis.createClient('6379', 'redis');


app.get('/', function(req, res, next) {
  client.incr('views', function(err, views) {
    if(err) return next(err);
    res.send('Page views ' + views);
  });
});

http.createServer(app).listen(process.env.PORT || 8080, function() {
  console.log('Listening on port ' + (process.env.PORT || 8080));
});
