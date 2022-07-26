const contact = require("./contact");

const main = async () => {
  const nama = await contact.tulisPertanyaan("Masukkan Nama Kamu : ");
  const email = await contact.tulisPertanyaan("Masukkan Email Kamu : ");
  const noHP = await contact.tulisPertanyaan("Masukkan No HP Kamu : ");
  contact.simpanContact(nama, email, noHP);
};

main();
