const inquirer = require("inquirer"); //*Paquete de menus para consola
require("colors"); //*Paquete de colores de consola

//*Listado de cuestions/preguntas que conforman el menú
const questions = [
  {
    type: "list", //?Este es el tipo de menu
    name: "option", //?Es la variable que se devuelve y trae el valor dentro
    message: "¿Que desea hacer?", //?mensaje que se muestra
    choices: [
      {
        value: "1", //?El valor de lo que se selecciona
        name: `${"1".red}. Crear una tarea`, //?El mensaje que se muetra
      },
      {
        value: "2",
        name: `${"2".red}. Listar tareas`,
      },
      {
        value: "3",
        name: `${"3".red}. Listar tareas completadas`,
      },
      {
        value: "4",
        name: `${"4".red}. Listar tareas pendientes`,
      },
      {
        value: "5",
        name: `${"5".red}. Completar tarea(s)`,
      },
      {
        value: "6",
        name: `${"6".red}. Borrar tarea`,
      },
      {
        value: "0",
        name: `${"0".red}. Salir`,
      },
    ],
  },
];

//*menu que se crea con el paquete de inquirer de menus interactivos, de forma asincrona
const inquirerMenu = async () => {
  //console.clear();
  console.log(`====================================`);
  console.log(`Seleccioene una opción`.rainbow);
  console.log(`====================================\n`);

  const { option } = await inquirer.prompt(questions); //?Aquí se imprime y se selecciona una opción del menú

  return option; //? Se retorna el valor de la seleccion del menú
};

//*Para realizar una pausa y que se limpie nuestro menu
const pausa = async () => {
  //?La pregunta que se va a hacer por consola
  const questions = [
    {
      type: "input",
      name: "option",
      message: `Presione ${"ENTER".rainbow} para continuar`,
    },
  ];
  //?Hacemos la pregunta y guardamso el valor
  const { option } = await inquirer.prompt(questions);
  console.clear(); //?Limpiamos la consola para que se vea bien
  return option; //?Devolvemos el valor de la pausa
};

//*Exportamos las funciones para ser usadas en otro lugar
module.exports = {
  inquirerMenu,
  pausa,
};
