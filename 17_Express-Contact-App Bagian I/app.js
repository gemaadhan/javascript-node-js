const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const { loadContact, findContact } = require("./utils/contacts");
const app = express();
const port = 3000;

// gunakan ejs
app.set("view engine", "ejs");

// Third Party Middleware
app.use(expressLayouts);

// built in middleware
app.use(express.static("public"));

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
  const contacts = loadContact();

  res.render("contact", {
    title: "Halaman Contact",
    layout: "layouts/main-layout",
    contacts: contacts,
  });
});

app.get("/contact/:nama", (req, res) => {
  const contact = findContact(req.params.nama);

  res.render("detail", {
    title: "Halaman Detail Contact",
    layout: "layouts/main-layout",
    contact: contact,
  });
});

app.use((req, res) => {
  res.status(404);
  res.send("<h1>404</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
