const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  // res.send("Hello World!");
  // res.json({
  //   nama: "Gema",
  //   email: "gemaadhan@gmail.com",
  //   noHP: "086798655",
  // });
  res.sendFile("./index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  // res.send("Ini adalah halaman About");
  res.sendFile("./about.html", { root: __dirname });
});

app.get("/contact", (req, res) => {
  // res.send("Ini adalah halaman Contact");
  res.sendFile("./contact.html", { root: __dirname });
});

app.get("/product/:id/category/:idCat", (req, res) => {
  res.send(
    `Product ID :  ${req.params.id} <br> Category ID : ${req.params.idCat}`
  );
});

app.get("/profil/:id", (req, res) => {
  res.send(`Product ID :  ${req.params.id} <br> Jenis : ${req.query.jenis}`);
});

app.use("/", (req, res) => {
  res.status(404);
  res.send("Error 404");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// const fs = require("fs");
// const http = require("http");
// const port = 1234;

// http
//   .createServer((req, res) => {
//     res.writeHead(200, {
//       "Content-Type": "text/html",
//     });
//     const url = req.url;

//     const renderHTML = (path, res) => {
//       fs.readFile(path, (error, data) => {
//         if (error) {
//           res.writeHead(404);
//           res.write("Error: FIle Not Found");
//         } else {
//           res.write(data);
//         }
//         res.end();
//       });
//     };

//     switch (url) {
//       case "/about":
//         renderHTML("./about.html", res);
//         break;
//       case "/contact":
//         renderHTML("./contact.html", res);
//         break;
//       default:
//         renderHTML("./index.html", res);
//         break;
//     }
//     // if (url === "/about") {
//     //   renderHTML("./about.html", res);
//     // } else if (url === "/contact") {
//     //   renderHTML("./contact.html", res);
//     // } else {
//     //   renderHTML("./index.html", res);
//     // }
//   })
//   .listen(port, () => {
//     console.log(`Server is Listening On Port ${port}`);
//   });
