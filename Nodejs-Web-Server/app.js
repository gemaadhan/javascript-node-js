const fs = require("fs");
const http = require("http");
const port = 1234;

http
  .createServer((req, res) => {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    const url = req.url;

    const renderHTML = (path, res) => {
      fs.readFile(path, (error, data) => {
        if (error) {
          res.writeHead(404);
          res.write("Error: FIle Not Found");
        } else {
          res.write(data);
        }
        res.end();
      });
    };

    switch (url) {
      case "/about":
        renderHTML("./about.html", res);
        break;
      case "/contact":
        renderHTML("./contact.html", res);
        break;
      default:
        renderHTML("./index.html", res);
        break;
    }
    // if (url === "/about") {
    //   renderHTML("./about.html", res);
    // } else if (url === "/contact") {
    //   renderHTML("./contact.html", res);
    // } else {
    //   renderHTML("./index.html", res);
    // }
  })
  .listen(port, () => {
    console.log(`Server is Listening On Port ${port}`);
  });
