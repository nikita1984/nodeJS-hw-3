const fs = require("fs");

const path = require("path");

const getWriteStream = function (fileName) {
  const name = fileName;
  const writeStream = fs.createWriteStream(path.join(__dirname, '..', `%${name}%_requests.log`),  { flags: 'a', encoding: 'utf8' });
  return writeStream;   
}

module.exports = getWriteStream;