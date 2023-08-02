//const { menuPrincipal, pausa } = require("./helpers/menu");

const { menuInquirer, pausa } = require("./helpers/inquirerMenu");
const Tarea = require("./models/tarea");
const Tareas = require("./models/tareas");

const main = async () => {
  let op = "";
  do {
    // op = await menuInquirer();
    // console.log({ op });
    const tarea = new Tarea("preparar comida");
    const tareas = new Tareas();
    tareas._listado[tarea.id] = tarea;
    console.log(tareas);
    await pausa();
  } while (op !== "0");
};
main();
