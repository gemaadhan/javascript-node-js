const { command, describe } = require("yargs");
const yargs = require("yargs");
const contact = require("./contact");

yargs
  .command(
    // "add",
    // "Menambahkan contact baru",
    // () => {},
    // (argv) => {
    //   console.log(argv.nama);
    // }
    {
      command: "add",
      describe: "Menambahkan contact baru",
      builder: {
        nama: {
          describe: "Nama Lengkap",
          demandOptions: true,
          type: "string",
        },
        email: {
          describe: "Email",
          demandOptions: false,
          type: "string",
        },
        noHP: {
          describe: "No HP",
          demandOptions: true,
          type: "string",
        },
      },
      handler: function (argv) {
        contact.simpanContact(argv.nama, argv.email, argv.noHP);
      },
    }
  )
  .demandCommand(); //untuk menambahkan warning ketika ketik node app saja

//menampilkan daftar semua nama dan no hp

yargs.command({
  command: `list`,
  describe: `Menampilkan Semua nama & no Hp COntact`,
  handler: () => {
    contact.listContact();
  },
});

// menampilakn detail sebuah contact
yargs.command({
  command: `detail`,
  describe: `Menampilkan Detail Sebuah COntact berdasarkan nama`,
  builder: {
    nama: {
      describe: "Nama Lengkap",
      demandOptions: true,
      type: "string",
    },
  },
  handler: (argv) => {
    contact.detailContact(argv.nama);
  },
});

// menghapus contact berdasarkan nama
yargs.command({
  command: `delete`,
  describe: `menghapus sebuah nama berdasarkan nama`,
  builder: {
    nama: {
      describe: "Nama Lengkap",
      demandOptions: true,
      type: "string",
    },
  },
  handler: (argv) => {
    contact.deleteContact(argv.nama);
  },
});

yargs.parse(); //kegunaan nya seperti main()
