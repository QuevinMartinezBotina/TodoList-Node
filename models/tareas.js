const Tarea = require("./tarea");
const color = require("colors");

class Tareas {
  /*   explicación de como funicona nuestro listado de DB
        !Vamos a tener un objeto que es nuestro listado de tareas

        ? 1-- Lo manejamos como objeot y no arreglo, para usar funciones que solo sirven para objetos
        ? 2-- Un ejemplo de como funcionaar este listado
        todo: _listado:    
        todo:          {'uuid-2131240-213': {id:12,des:comer,completadoEn:22-03-2022}},    
        todo:          {'uuid-2131240-213': {id:12,des:comer,completadoEn:22-03-2022}},    
        todo:          {'uuid-2131240-213': {id:12,des:comer,completadoEn:22-03-2022}},    
        * Así es como funciona, se asigna el id como atributo de nuestro objeto y ahí se guarda toda la tarea 
    */
  _listado = {};

  get listadoEnArreglo() {
    const listado = []; //?Nos devuelve este arreglo
    //?Sacamos todos los id de nuestra lista objeto para meterla a una lista arreglo
    Object.keys(this._listado).forEach((idTarea) => {
      const tarea = this._listado[idTarea]; //?En el obejto este atributo trae toda una tarea completa
      listado.push(tarea); //?Guardamos esa tarea en nuestro lista arreglo
    });

    return listado;
  }

  //*Eso es lo que se ejecuta cuando creamos una instancia
  constructor() {
    this._listado = {};
  }

  //*Borramos la tarea usando el id que nos manda
  borrarTarea(idTarea = "") {
    if (this._listado[idTarea]) {
      delete this._listado[idTarea];
    }
  }

  //*Esto es proque necesitamso convertir nuestor objeto en un arreglo, pro ello se hace este proceso
  cargarTareaFromArray(tareas = []) {
    tareas.forEach((tarea) => {
      this._listado[tarea.id] = tarea;
    });
  }

  //*Esto es para listar de uan forma bonita y sin datos inncesarios, modelar la data
  listadoCompleto() {
    let i = 0;

    this.listadoEnArreglo.forEach((tarea) => {
      i++;
      if (tarea.completadoEn == null) {
        console.log(`${color.green(i)}. ${tarea.desc} :: ${"pendiente".red}`);
      } else {
        console.log(
          `${color.green(i)}. ${tarea.desc} :: ${"completado".green}`
        );
      }
    });
  }

  crearTarea(desc = "") {
    const tarea = new Tarea(desc); //?Llamamos una intancia y le pasamso la desc
    this._listado[tarea.id] = tarea; //?Creamos un propieda = al id y ahi guardamos nuestar tarea
  }

  //*Usamos para mostrar la listas de tareas pendientes y completads opciones 3 y 4 del menu
  listarPendientesCompletadas(completadas = true) {
    console.log();
    let contador = 0; //?contador para numerar tareas

    this.listadoEnArreglo.forEach((tarea) => {
      const { desc, completadoEn } = tarea; //?Desetructuramos el arreglo para sacar sus campos
      const estado = completadoEn ? "Completada".green : "Pendiente".red; //?Hacemos un condicional ternario para mostar completado o pendiente

      //?comparamos para saber si es true o false y saber que debemos mostrar en el lugar que lo estamos llamando
      if (!!completadoEn === completadas) {
        ++contador;
        console.log(`${contador}. ${desc} :: ${estado} || ${completadoEn}`); //?Aqui solo imprimimos esos resultados
      }
    });
  }

  //*metodo para completa run arreglo de tareas
  toggleCompletadas(idsTareas = []) {
    //?Aqui recorremos y cambiamos el estado de las tareas que fueron seleccionadas
    idsTareas.forEach((id) => {
      const tarea = this._listado[id];
      if (!tarea.completadoEn) {
        tarea.completadoEn = new Date().toISOString();
      }
    });

    //?Veirifcamos que el id no este inlucido dentro de lo que seleccionamos, entonces esto quiere decir que hay que marcarlo como no completado y lso otros que si estan selccionados como completados

    this.listadoEnArreglo.forEach((tarea) => {
      if (!idsTareas.includes(tarea.id)) {
        this._listado[tarea.id].completadoEn = null;
      }
    });
  }
}

//*Exportamos para usar
module.exports = Tareas;
