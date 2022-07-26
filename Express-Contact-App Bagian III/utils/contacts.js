const fs = require("fs");

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

// cari kontakc berdasarkan nama
const findContact = (nama) => {
  const contacts = loadContact();
  const contact = contacts.find(
    (contact) => contact.nama.toLowerCase() === nama.toLowerCase()
  );
  return contact;
};

// ambil semua data di contact.json
const loadContact = () => {
  const file = fs.readFileSync("data/contacts.json", "utf8"); //baca file secara synchonous, masih berbentuk string
  const contacts = JSON.parse(file); //rubah string menjadi json
  return contacts;
};

//menimpa file contacts.js dengan data yang baru
const saveContacts = (contacts) => {
  fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));
};

//menambahkan data contact baru
const addContact = (contact) => {
  const contacts = loadContact();
  contacts.push(contact);
  saveContacts(contacts);
};

// cek nama yang duplikat
const cekDuplikat = (nama) => {
  const contacts = loadContact();
  return contacts.find(
    (contact) => contact.nama.toLowerCase() === nama.toLowerCase()
  );
};

// hapus contact
const deleteContact = (nama) => {
  const contacts = loadContact();
  // kalau filter, akan menelusuri sampai akhir sedangkan fungsi find kalau udah ketemu ya berhenti
  const filteredContacts = contacts.filter((contact) => contact.nama !== nama);

  saveContacts(filteredContacts);
};

module.exports = {
  loadContact,
  findContact,
  addContact,
  cekDuplikat,
  deleteContact,
};
