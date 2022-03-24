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


  //*Eso es lo que se ejeucta cuando creamos una instancia
  constructor (){
      this._listado = {};
  }
}

//*Exportamos para usar
module.exports = Tareas;
