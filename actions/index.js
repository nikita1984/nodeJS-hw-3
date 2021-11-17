const fs = require("fs");

const path = require("path");
const {EOL} = require('os');
const { Transform } = require('stream');

const stream = fs.createReadStream(path.join(__dirname, 'access.log'));

const regex1 = RegExp('89.123.1.41', 'g');
const regex2 = RegExp('34.48.240.111', 'g');

const transform = function (regex) {
  const transformStream = new Transform({
    transform(chunk, encoding, callback) {
      const transformedChunk = chunk.toString();
  
      const found = transformedChunk.match(regex);
      const commaSymbol = ','
      const foundString = found.join(`${commaSymbol}${EOL}`)
      
      this.push(foundString);
      
      callback();
    }
  });
  return transformStream;
}

const write = function (fileName) {
  const name = fileName;
  const writeStream = fs.createWriteStream(path.join(__dirname, `%${name}%_requests.log`),  { flags: 'a', encoding: 'utf8' });
  return writeStream;   
}

stream.pipe(transform(regex1)).pipe(write(regex1.source));
stream.pipe(transform(regex2)).pipe(write(regex2.source));