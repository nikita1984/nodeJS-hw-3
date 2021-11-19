const fs = require("fs");
const path = require("path");
/// const request = require('request');
const getTransformStream = require('./actions/getTransformStream');
const getWriteStream = require('./actions/getWriteStream');

// const url = "https://drive.google.com/file/d/1A8B0eDEagkO6XlpJAinsk8_9qQTsnVly/view";

const regex1 = RegExp('89.123.1.41', 'g');
const regex2 = RegExp('34.48.240.111', 'g');
const stream = fs.createReadStream(path.join(__dirname, 'access.log'));


stream.pipe(getTransformStream(regex1)).pipe(getWriteStream(regex1.source));
stream.pipe(getTransformStream(regex2)).pipe(getWriteStream(regex2.source));