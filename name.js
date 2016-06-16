'use strict';

const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'names.json');

exports.get = cb => {
  readNames(cb);
};

exports.create = (newName, cb) => {
  readNames((err, names) => {
    if(err) return cb(err);
    names.push(newName);
    writeNames(names, cb);
  });
}

function readNames(cb) {
  // read and parse
  fs.readFile(dataPath, (err, data) => {
    if(err) return cb(err);

    try {
      var names = JSON.parse(data);
    } catch(e) {
      var names = [];
    }

    cb(null, names);
  });
}

function writeNames(names, cb) {
  // stringify and write
  fs.writeFile(dataPath, JSON.stringify(names), cb);
}
