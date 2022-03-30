const fs = require("fs"); //?Importamos esta propiedad paar crera archivos de sistema

const guardarDB = (data) => {
  const rute = "./db/tareasDB.json"; //?Ubicamos al ruta y creamso archivo
  fs.writeFileSync(rute, JSON.stringify(data)); //?Pasamos la ruta y los datos a guardar, ademas convetimos los datos a un tipo de json valido para guardar
};

module.exports = {
  guardarDB,
};
