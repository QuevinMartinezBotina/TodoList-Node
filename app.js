require("colors");

const { guardarDB } = require("./helpers/conexion");
const { inquirerMenu, pausa, leerInput } = require("./helpers/inquirer");
const Tarea = require("./models/tarea");
const Tareas = require("./models/Tareas");

const main = async () => {
  opt = "";
  const tareas = new Tareas(); //*Intanciamos clase para usar sus funciones y atributos

  do {
    opt = await inquirerMenu(); //*Mostramos menú y esperamos respuesta

    switch (opt) {
      case "1":
        //crear tarea
        const desc = await leerInput("Descripción: "); //?Realiza pregunta y guarda respuesta
        tareas.crearTarea(desc); //?Llamo instancia y funcion de crear y guardo la desc que ingrese por consola
        break;
      case "2":
        //Listar tareas
        console.log(tareas.listadoEnArreglo);
        break;

      default:
        break;
    }

    //guardarDB(tareas.listadoEnArreglo);//?Guardamos nuestras listas en una db

    await pausa();
  } while (opt !== "0");
};

main();
