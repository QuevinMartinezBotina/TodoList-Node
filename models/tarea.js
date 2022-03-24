const {v4:uuidv4} = require('uuid');//*Paquete generador de ids


class Tarea {
  //*Los campos de nuestra "DB"
  id = "";
  desc = "";
  completadoEn = null; //? Lo ponemos null para recibir una fecha a futuro

  //*Este es el que se ejecuta cuando creamos una instancia
  constructor(desc) {
    this.id = uuidv4(); //?Se genera un id unico aleatorio por el paquete uuid
    this.desc = desc; //?La desc de nuestro modelo va ser = al desc que llega por consola
    this.completadoEn = null;
  }
}

//*Exportamos para usar el modelo
module.exports = Tarea;
