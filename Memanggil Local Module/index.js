// const nama = `Gema Nadia Rmaadhan`;
// const cetakNama = (nama) => `Hi, nama saya ${nama}`;
// console.log(cetakNama(nama));

// const fs = require("fs"); //untuk core module
// const cetakNama = require("./coba"); //import local module
// const moment = require("moment"); //npm module atau 3rd party model yang berada di folder node_modules

// console.log(`Hellow WPU`);
// const cetakNama = require("./coba"); //import local module
// const PI = require("./coba"); //import local module
const coba = require("./coba");
console.log(
  coba.cetakNama("Gema"),
  coba.PI,
  coba.mahasiswa.cetakMhs(),
  new coba.Orang()
);
