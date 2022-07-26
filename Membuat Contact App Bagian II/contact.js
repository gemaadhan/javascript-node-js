const fs = require("fs");
const chalk = require("chalk");
const validator = require("validator");
//membuat folder data
const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

const dataPath = "./data/contacts.json";
//membuat file contacts.json jika belum ada
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]", "utf-8");
}

const simpanContact = (nama, email, noHP) => {
  const contact = { nama: nama, email: email, noHP }; //untuk menampung masukkan
  const file = fs.readFileSync("data/contacts.json", "utf8"); //baca file secara synchonous, masih berbentuk string
  const contacts = JSON.parse(file); //rubah string menjadi json

  // cek duplikasi nama di json
  const duplikat = contacts.find((contact) => contact.nama === nama);
  if (duplikat) {
    console.log(
      chalk.red.inverse.bold("nama contact sudah ada, gunakan nama lain")
    );
    return false;
  }

  // cek email
  if (email) {
    //kalo ada
    if (!validator.isEmail(email)) {
      //jika bukan email
      console.log(chalk.red.inverse.bold("Email Tidak Valid"));
      return false;
    }
  }

  if (!validator.isMobilePhone(noHP, "id-ID")) {
    //jika bukan noHP
    console.log(chalk.red.inverse.bold("no HP Tidak Valid"));
    return false;
  }

  contacts.push(contact); //push masukkan ke json
  fs.writeFileSync("data/contacts.json", JSON.stringify(contacts)); //rubah contacts menjadi string lagi, trus masukkan ke dalam file.
  console.log(chalk.green.inverse.bold("Makasih BRo udah input data"));
};

module.exports = {
  simpanContact: simpanContact,
};
