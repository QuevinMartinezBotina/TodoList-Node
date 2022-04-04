require("colors");

const { guardarDB, leerDB } = require("./helpers/conexion");
const {
  inquirerMenu,
  pausa,
  leerInput,
  listarTareasBorrar,
  confirmar,
  mostrarListadoCheckList,
} = require("./helpers/inquirer");
const Tarea = require("./models/tarea");
const Tareas = require("./models/Tareas");

const main = async () => {
  opt = "";
  const tareas = new Tareas(); //*Intanciamos clase para usar sus funciones y atributos

  const tareasDB = leerDB(); //?usamos nuestra función para leer nuestra DB que esta en el JSON

  if (tareasDB) {
    //?Si existe vamos a  establecer las tareas
    tareas.cargarTareaFromArray(tareasDB);
  }

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
        console.log(tareas.listadoCompleto());
        break;

      case "3":
        //listar tareas completadas
        tareas.listarPendientesCompletadas(true);
        break;

      case "4":
        //listar tareas pendientes
        tareas.listarPendientesCompletadas(false);
        break;
      case "5":
        //Completar tareas
        const ids = await mostrarListadoCheckList(tareas.listadoEnArreglo);
        tareas.toggleCompletadas(ids);
        break;
      case "6":
        //listar tareas por borrar
        const id = await listarTareasBorrar(tareas.listadoEnArreglo); //?Desplegamso una list con las tareas paar seleccionar una a eliminar
        if (id !== "0") {
          //todo: Preguntamos si esta seguro de eliminar
          const confirm = await confirmar("¿Esta seguro?");
          if (confirm) {
            tareas.borrarTarea(id);
            console.log(" Realizado con exito!".rainbow);
          } else {
            console.log(" Cancelado con exito!".rainbow);
          }
        }
        break;

      default:
        break;
    }

    guardarDB(tareas.listadoEnArreglo); //?Guardamos nuestras listas en una db

    await pausa();
  } while (opt !== "0");
};

main();
