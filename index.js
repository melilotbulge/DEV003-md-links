const api = require("./api.js");

const mdLinks = (path, options) => {
  // return new Promise(function (resolve, reject) {
  //   constsuccess = true;
  //   if (success) {
  //     resolve("exito");
  //   } else {
  //     reject("error");

  // const miNombre = new String("juan");
  // // 'juan'
  // const miNumero = new Number(9);
  // const miFecha = new Date();
  // // fecha de hoy ...

  let rutaAbsoluta = path;
  if (api.pathexist(path) === false) {
    throw Error("La ruta no existe");
  }
  if (api.absolutePath(path) === false) {
    rutaAbsoluta = api.absolute(path);
  }
  if (api.mdFile(path) === false) {
    throw Error("No es un archivo MarkDown");
  }
  // [{ - - - }]
  // [{ - - - - -},  ...]
};

console.log(mdLinks("./README.md"));
