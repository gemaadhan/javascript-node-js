// core module
// file system
const fs = require("fs");
const readline = require("readline");
// menuliskan string ke file secara synchronus

// try {
//   fs.writeFileSync("data/tesx.txt", `Hallo brow secara synchronius`);
// } catch (e) {
//   console.log(e);
// }

// menuliskan string ke file (asynchronus)
// fs.writeFile("data/test.txt", `Hallo secara async`, (err) => {
//   console.log(err);
// });

// membaca isi file
// const data = fs.readFileSync("data/tesx.txt", "utf-8");
// console.log(data);

// fs.readFile("datas/test.txt", "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukkan Nama Anda : ", (nama) => {
  rl.question("Masukkan No Anda : ", (hp) => {
    fs.readFile("data/results.json", function (err, data) {
      // 1. Cara Ku Nyonto Stack Overflow
      // const json = JSON.parse(data);
      // console.log(data.toString());
      // json.push({ nama: `${nama}`, no_hp: `${hp}` });
      // fs.writeFile("data/results.json", JSON.stringify(json), (err) => {
      //   console.log(err);
      // });
      // 2. Cara Pak Sandhika
      const contact = { nama: nama, hp: hp }; //untuk menampung masukkan
      const file = fs.readFileSync("data/results.json", "utf8"); //baca file secara synchonous, masih berbentuk string
      const contacts = JSON.parse(file); //rubah string menjadi json
      contacts.push(contact); //push masukkan ke json
      fs.writeFileSync("data/results.json", JSON.stringify(contacts)); //rubah contacts menjadi string lagi, trus masukkan ke dalam file.
      console.log("Makasih BRo");
    });
    rl.close();
  });
});
