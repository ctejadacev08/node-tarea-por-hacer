const colors = require("colors");

const menuPrincipal = () => {
  console.log("==================".green);
  console.log("==Menu Principal==".green);
  console.log("==================\n".green);
  console.log("1.Registrar Tarea".yellow);
  console.log("2.Editar Tarea".yellow);
  console.log("3.Borrar Tarea".yellow);
  console.log("4.Listar Tarea Pendientes".yellow);
};

module.exports = {
  menuPrincipal,
};
