const fs = require("fs");

const getPublicDir = require("./getPublicDir.js");

const readStaticFiles = (reqUrl, res, contentType, enc) => {
  const filePath = getPublicDir(reqUrl);
  const fileStream = fs.createReadStream(filePath, enc);
  res.writeHead(200, { "Content-Type": contentType });
  fileStream.pipe(res);
};

module.exports = readStaticFiles;
