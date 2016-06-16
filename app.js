'use strict';

const PORT = 8000;

const express = require('express');
const morgan = require('morgan');
const path = require('path');

let app = express();

app.use(morgan('dev'));


/// Example Middleware Function:
app.use(function(req, res, next) {
  req.monkey = 'primate';
  next();
});

//////////////////////////////////////////
// query string === ?key=value&key2=value2


function authMiddleware(req, res, next) {
  if(req.query.password !== 'tree') {
    res.status(401);
    res.send('WRONG PASSWORD!\n');
    return;
  }
  next();
}

app.use(authMiddleware);


// defines a GET request to a url
app.get('/', function(req, res) {
  let indexPath = path.join(__dirname, 'index.html');
  res.sendFile(indexPath);
});

app.get('/color', function(req, res) {
  res.send('color is blue\n');
});


app.post('/', function(req, res) {

  console.log('req.monkey:', req.monkey);

  res.send('posted!\n');
});



app.listen(PORT, err => {
  console.log(err || `Express listening on port ${PORT}`);
});







