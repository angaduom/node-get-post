var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var PORT = 8080;
//initialize the app
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/twitter', function(req, res) {
  res.sendFile(path.join(__dirname, '/../client/twitter.html'));
})

app.get('/tweet', function(req, res) {
  res.sendFile(path.join(__dirname, '/../client/tweet.html'));
})

app.get('/get-tweets', function(req, res) {
  console.log("here")
  res.send({
    "name": "this is it"
  });
})

app.post('/tweet', function(req, res) {
  console.log(req.body);
  res.end("done");
})

//make the app listen on a port
app.listen(PORT, function() {
  console.log("The server is listening http://localhost:" + PORT);
})

/* to learn about how to get other require other files here
 * http://www.sitepoint.com/understanding-module-exports-exports-node-js/
 */
