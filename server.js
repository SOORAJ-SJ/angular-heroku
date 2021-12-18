const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/angular-heroku'));
app.get('/*', function(req,res) {
  console.log(req.headers['user-agent']);
  res.sendFile(path.join(__dirname+
    '/dist/angular-heroku/index.html'));});
app.listen(process.env.PORT || 8080);