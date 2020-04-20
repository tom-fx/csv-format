#!/usr/bin/env node

// Script to reformat csv file by adding space and newline
const fs    = require('fs'),
      async = require('async');

const writeStream = fs.createWriteStream('./output.csv', {flags: 'a'});
const pathToFile = process.argv.slice(2, 3).toString();

fs.truncate('./output.csv', 0, (error) => {
  if (error) return error;

  fs.readFile(pathToFile, 'utf8', (error, data) => {
    if (error) return error;

    const inputArray = data.split(',');
    writeStream.write('Email Address, \n');
    async.each(inputArray, (email, callback) => {
      writeStream.write(email + ', \n');
      callback();
    }, (error) => {
      if (error) return error;

      console.log('Operation completed');
      writeStream.end();
    });
  });
});
