#!/usr/bin/env node
// Script to reformat csv file by adding space and newline
const fs    = require('fs'),
      async = require('async');

const writeStream = fs.createWriteStream('./output.csv', {flags: 'a'});
const pathToFile = process.argv.slice(2, 3).toString();

fs.truncate('./output.csv', 0, (error) => {
  if (error) console.log('Error clearing output file');

  fs.readFile(pathToFile, 'utf8', (error, data) => {
    if (error) console.log('File read error: ', error);

    const inputArray = data.split(',');
    writeStream.write('Email Address, \n');
    async.each(inputArray, (email, callback) => {
      writeStream.write(email + ', \n');
      callback();
    }, (error) => {
      if (error) console.log('Error writing to file: ', error);

      console.log('Operation completed');
      writeStream.end();
    });
  });
});
