const fs = require("fs");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

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

// Menghindari Callback Hell
const tulisPertanyaan = (pertanyaan) => {
  return new Promise((resolve, reject) => {
    rl.question(pertanyaan, (nama) => {
      resolve(nama);
    });
  });
};

const simpanContact = (nama, email, noHP) => {
  const contact = { nama: nama, email: email, noHP }; //untuk menampung masukkan
  const file = fs.readFileSync("data/contacts.json", "utf8"); //baca file secara synchonous, masih berbentuk string
  const contacts = JSON.parse(file); //rubah string menjadi json
  contacts.push(contact); //push masukkan ke json
  fs.writeFileSync("data/contacts.json", JSON.stringify(contacts)); //rubah contacts menjadi string lagi, trus masukkan ke dalam file.
  console.log("Makasih BRo");
  rl.close();
};

module.exports = {
  tulisPertanyaan: tulisPertanyaan,
  simpanContact: simpanContact,
};
