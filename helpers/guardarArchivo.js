const fs = require("fs");

const rutaArchivo = "./db/data.json";

const guardarData = (data) => {
  fs.writeFileSync(rutaArchivo, JSON.stringify(data)); //JSON.stringify(data): convertir un obj a un string
};

const leerData = () => {
  if (!fs.existsSync(rutaArchivo)) {
    return null;
  }
  const info = fs.readFileSync(rutaArchivo, { encoding: "utf-8" });
  const data = JSON.parse(info);
  console.log(info);
  return data;
};

module.exports = {
  guardarData,
  leerData,
};
