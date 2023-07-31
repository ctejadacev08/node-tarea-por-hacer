const colors = require("colors");

const menuPrincipal = () => {
  return new Promise((resolve) => {
    console.clear();
    console.log("=======================================".green);
    console.log("===========  Menu Principal  ==========".green);
    console.log("=======================================\n".green);

    console.log(`${"1.".green} Crear tarea`.yellow);
    console.log(`${"2.".green} Listar tarea`.yellow);
    console.log(`${"3.".green} Listar tareas completadas`.yellow);
    console.log(`${"4.".green} Listar tareas pendientes`.yellow);
    console.log(`${"5.".green} Completar tarea(s)`.yellow);
    console.log(`${"6.".green} Borrar tarea`.yellow);
    console.log(`${"0.".green} Salir \n`.yellow);

    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question(`Seleccione una opción: `, (op) => {
      readline.close();
      resolve(op);
    });
  });
};

const pausa = () => {
  return new Promise((resolve) => {
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question(`\nPresione ${"ENTER".green} para continuar\n`, (op) => {
      readline.close();
      resolve();
    });
  });
};

module.exports = {
  menuPrincipal,
  pausa,
};
