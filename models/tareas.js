const Tarea = require("./tarea");

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

  cargarTareaFromArray (tareas = []){
    this._listado[tarea.id] = tareas;
  }

  crearTarea(desc = "") {
    const tarea = new Tarea(desc); //?Llamamos una intancia y le pasamso la desc
    this._listado[tarea.id] = tarea; //?Creamos un propieda = al id y ahi guardamos nuestar tarea
  }
}

//*Exportamos para usar
module.exports = Tareas;
