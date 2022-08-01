const express = require("express");
const expressLayouts = require("express-ejs-layouts");

require("./utils/db");
const Contact = require("./model/contact");

const app = express();
const port = 3000;

// Setup EJS
app.set("view engine", "ejs");
app.use(expressLayouts);
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// Halaman Home
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

// Halaman About
app.get("/about", (req, res, next) => {
  res.render("about", {
    title: "Halaman About",
    layout: "layouts/main-layout",
  });
});

// Halaman Contact
app.get("/contact", async (req, res) => {
  // Contact.find().then((contact) => {
  //   res.send(contact);
  // });

  const contacts = await Contact.find();

  res.render("contact", {
    title: "Halaman Contact",
    layout: "layouts/main-layout",
    contacts: contacts,
    msg: req.flash("msg"),
  });
});

app.listen(port, () => {
  console.log(`Mongo Contact App | Listening at http://localhost:${port}`);
});
