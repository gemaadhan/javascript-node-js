const { command, describe } = require("yargs");
const yargs = require("yargs");
const contact = require("./contact");

yargs.command(
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
);

yargs.parse(); //kegunaan nya seperti main()
