//const { menuPrincipal, pausa } = require("./helpers/menu");

const { guardarData, leerData } = require("./helpers/guardarArchivo");
const { menuInquirer, pausa, leerInput } = require("./helpers/inquirerMenu");
const Tarea = require("./models/tarea");
const Tareas = require("./models/tareas");

const main = async () => {
  let op = "";
  const tareas = new Tareas();

  const infoData = leerData();
  if (infoData) {
    //establecer las tareas
    // cargar las tareas
    tareas.cargarTareasArray(infoData);
  }

  do {
    op = await menuInquirer(); //funcion que imprime el menu principal y retorna una opcion
    switch (op) {
      case "1":
        //crear opcion
        const desc = await leerInput("Descripción:");
        tareas.crearTarea(desc);
        break;

      case "2":
        // console.log(tareas.listadoArr);
        tareas.listadoTarea();

        break;
      case "3": // listar las tareas completadas
        // console.log(tareas.listadoArr);
        tareas.listarPendientesCompletadas(true);

        break;
      case "4": // listar las tareas pendientes
        // console.log(tareas.listadoArr);
        tareas.listarPendientesCompletadas(false);

        break;
    }

    guardarData(tareas.listadoArr);

    await pausa();
  } while (op !== "0");
};
main();
