const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/wpu", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// // menambah 1 data
// const contact1 = new Contact({
//   nama: "Aga",
//   nohp: "0898021523055",
//   email: "aga@gmail.com",
// });

// contact1.save().then((contact) => console.log(contact));
