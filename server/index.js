const http = require("http");
const getHtml = require("./helpers/getHtml.js");
const readStaticFiles = require("./helpers/readStaticFIles.js");
const { log } = require("console");
const port = 8089;

const onReq = (req, res) => {
  const url = req.url;
  if (url === "/") {
    getHtml("index.html", res);
  } else if (url === "/cari") {
    getHtml("cariMobil.html", res);
    console.log("Hai cari");
  } else if (url.match(".css$")) {
    readStaticFiles(url, res, "text/css", "UTF-8");
  } else if (req.url.match(".js$")) {
    readStaticFiles(url, res, "text/js", "UTF-8");
  } else if (url.match(".png$")) {
    readStaticFiles(url, res, "image/png");
  } else if (url.match(".jpg$")) {
    readStaticFiles(url, res, "image/jpg");
  } else {
    getHtml("404.html", res);
  }
};

const server = http.createServer(onReq);
server.listen(port, "127.0.0.1", () => {
  console.info(`is listening on port ${port}`);
});
