/* _listado: {
    // { "uuid-1234568-45658452-2:{id:12,desc:asd,completadoEn:9251}" },-->comentar un sola
    // linea de codigo: ctrl +}
    { "uuid-1234568-45658452-2:{id:12,desc:asd,completadoEn:9251}" },
    { "uuid-1234568-45658452-2:{id:12,desc:asd,completadoEn:9251}" }
  }---> seleccionar un bloque de codigo: alt+shift+a */
const Tarea = require("./tarea");
const colors = require("colors");
class Tareas {
  _listado = {};

  get listadoArr() {
    const listado = [];
    Object.keys(this._listado).forEach((key) => {
      // abstraendo todos los keys de mi arreglo de obj
      // y recorriendolos para insertarlos en tarea.
      const tarea = this._listado[key]; // se esta insertando cada elemento del obj a un arreglo.
      listado.push(tarea);
    });
    return listado;
  }

  constructor() {
    this._listado = {};
  }

  cargarTareasArray = (tareas = []) => {
    tareas.forEach((tarea) => {
      this._listado[tarea.id] = tarea;
    });
  };

  crearTarea(desc = "") {
    const tarea = new Tarea(desc);
    this._listado[tarea.id] = tarea;
  }

  listadoTarea() {
    // let desc = "";
    // for (let index = 0; index < this.listadoArr.length; index++) {
    //   if (this.listadoArr[index].completadoEn !== null) {
    //     desc += `${colors.green(index + 1)}.  ${
    //       this.listadoArr[index].desc
    //     } :: ${"completada".green}\n`;
    //   } else {
    //     desc += `${colors.red(index + 1)}.  ${this.listadoArr[index].desc} :: ${
    //       "pendiente".red
    //     }\n`;
    //   }
    // }

    console.log();

    this.listadoArr.forEach((tarea, i) => {
      const idx = `${i + 1}.`.green;
      const { desc, completadoEn } = tarea;
      const estado = completadoEn ? "Completado".green : "Pendiente".red;
      console.log(`${idx} ${desc} :: ${estado}`);
    });
  }

  listarPendientesCompletadas(completadas = true) {
    console.log();
    let contador = 0;

    this.listadoArr.forEach((tarea, i) => {
      const { desc, completadoEn } = tarea;
      const estado = completadoEn ? "Completado".green : "Pendiente".red;
      if (completadas) {
        if (completadoEn !== null) {
          contador += 1;
          console.log(
            `${(contador.toString() + ".").green} ${desc} :: ${completadoEn}`
          );
        }
      } else {
        if (completadoEn === null) {
          contador += 1;
          console.log(
            `${(contador.toString() + ".").green} ${desc} :: ${estado}`
          );
        }
      }
    });
  }
  borrarTarea(id = "") {
    if (this._listado[id]) {
      delete this._listado[id];
    }
  }
}

module.exports = Tareas;
