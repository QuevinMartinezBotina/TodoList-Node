require(`colors`);

const mostrarMenu = () => {
  return new Promise((resolve) => {
    console.clear();
    console.log(`====================================`);
    console.log(`Seleccioene una opción`.red);
    console.log(`====================================\n`);

    console.log(`${"1.".red} Crear tareas`);
    console.log(`${"2.".red} Listar tareas`);
    console.log(`${"3.".red} Listar tareas completadas`);
    console.log(`${"4.".red} Listar taraes pendientes`);
    console.log(`${"5.".red} Completar tarae(s)`);
    console.log(`${"6.".red} Borrar tarea`);
    console.log(`${"0.".red} Salir \n`);

    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question("Selecciones una opción: ", (opt) => {
      //console.log({opt});
      readline.close();
      resolve(opt);
    });
  });
};

const pausa = () => {
  return new Promise((resolve) => {
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question(`\nPresiones ${"ENTER".red} para continuar\n`, (opt) => {
      readline.close();
      console.log('Fin programa');
      resolve(opt);
    });
  });
};

module.exports = {
  mostrarMenu,
  pausa,
};
