/* _listado: {
    // { "uuid-1234568-45658452-2:{id:12,desc:asd,completadoEn:9251}" },-->comentar un sola
    // linea de codigo: ctrl +}
    { "uuid-1234568-45658452-2:{id:12,desc:asd,completadoEn:9251}" },
    { "uuid-1234568-45658452-2:{id:12,desc:asd,completadoEn:9251}" }
  }---> seleccionar un bloque de codigo: alt+shift+a */
const Tarea = require("./tarea");
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
  crearTarea(desc = "") {
    const tarea = new Tarea(desc);
    this._listado[tarea.id] = tarea;
  }
}

module.exports = Tareas;
