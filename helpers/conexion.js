const fs = require("fs"); //?Importamos esta propiedad paar crera archivos de sistema
const { arch } = require("os");
const archivo = "./db/tareasDB.json"; //?Ubicamos al ruta y creamso archivo

const guardarDB = (data) => {
  fs.writeFileSync(archivo, JSON.stringify(data)); //?Pasamos la ruta y los datos a guardar, ademas convetimos los datos a un tipo de json valido para guardar
};

const leerDB = () => {
  //?verificamos que el archivo de "DB" no exista
  if (!fs.existsSync(archivo)) {
    return null;
  }

  //?recuperamos esos datos ahora que sabemso que existe el archivo
  const infoDB = fs.readFileSync(archivo, { encoding: "utf-8" }); //!Aquí solo es un string, neecitamos un objeto
  const data = JSON.parse(infoDB);

  //console.log(data);
  return data;
};

module.exports = {
  guardarDB,
  leerDB,
};
