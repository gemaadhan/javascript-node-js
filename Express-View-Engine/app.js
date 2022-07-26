const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const port = 3000;

// gunakan ejs
app.set("view engine", "ejs");
app.use(expressLayouts);

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

app.get("/about", (req, res) => {
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

app.use("/", (req, res) => {
  res.status(404);
  res.send("Error 404");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
