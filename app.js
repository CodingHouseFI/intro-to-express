'use strict';

const PORT = 8000;

const express = require('express');
const morgan = require('morgan');
const path = require('path');

let app = express();

app.use(morgan('dev'));

// defines a GET request to a url
app.get('/', function(req, res) {
  let indexPath = path.join(__dirname, 'index.html');
  res.sendFile(indexPath);
});

/*
    RESTful Methods

    Create   -   POST
    Read     -   GET
    Update   -   PUT
    Delete   -   DELETE
*/

//    /square/5


var names = [];

// read the array of names
app.get('/names', function(req, res) {
  console.log('req.headers:', req.headers);
  res.send(names);
});

/// POST   /names/Cade

app.post('/names/:newName', function(req, res) {

  console.log('req.params:', req.params);
  let name = req.params.newName;
  names.push(name);
  res.send();
});



app.listen(PORT, err => {
  console.log(err || `Express listening on port ${PORT}`);
});
