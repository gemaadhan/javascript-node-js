const express = require("express");

const expressLayouts = require("express-ejs-layouts");
const morgan = require("morgan");
const app = express();
const port = 3000;

// gunakan ejs
app.set("view engine", "ejs");

// Third Party Middleware
app.use(expressLayouts);
app.use(morgan("dev"));
// built in middleware
app.use(express.static("public"));

// Application level middleware
app.use((req, res, next) => {
  console.log("Time : ", Date.now());
  next();
});

app.get("/", (req, res) => {
  const mahasiswa = [
    {
      nama: "Gema",
      email: "gema@gmail.com",
    },
    {
      nama: "Erik",
      email: "Erik@gmail.com",
    },
    {
      nama: "Doddy",
      email: "Doddy@gmail.com",
    },
  ];
  res.render("index", {
    nama: "Gema Nadia Rmaadhana",
    layout: "layouts/main-layout",
    title: "Halaman Home",
    mahasiswa: mahasiswa,
  });
});

app.get("/about", (req, res, next) => {
  res.render("about", {
    title: "Halaman About",
    layout: "layouts/main-layout",
  });
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    title: "Halaman Contact",
    layout: "layouts/main-layout",
  });
});

app.get("/product/:id/category/:idCat", (req, res) => {
  res.send(
    `Product ID :  ${req.params.id} <br> Category ID : ${req.params.idCat}`
  );
});

app.get("/profil/:id", (req, res) => {
  res.send(`Product ID :  ${req.params.id} <br> Jenis : ${req.query.jenis}`);
});

app.use((req, res) => {
  res.status(404);
  res.send("<h1>404</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
