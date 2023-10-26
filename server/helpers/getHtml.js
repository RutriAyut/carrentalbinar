const path = require("path");
const fs = require("fs");

const getHtml = (htmlFileName, res) => {
  const filepath = path.join("./public", htmlFileName);
  fs.readFile(filepath, "UTF-8", (err, html) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(html);
  });
};

module.exports = getHtml;
