require("colors");

const { inquirerMenu, pausa } = require("./helpers/inquirer");
const Tarea = require("./models/tarea");
const Tareas = require("./models/Tareas");


const main = async () => {
  opt = "";

  do {
    opt = await inquirerMenu(); //*Mostramos menú y esperamos respuesta

    await pausa();
  } while (opt !== "0");
};

main();
