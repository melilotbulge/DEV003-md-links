module.exports = () => {
  // ...
};

const api = require("./api.js");

//const mdLinks = (path, options) => {
  // aqui va toda la logica de md links
  // llamar a md links
//};

//mdLinks("READMEKL.md", { validate: true });

const mdLinks = (path, options) => {
  return new Promise((resolve, reject) => {
    let rutaAbsoluta = path;
    if (api.pathexist(path) === false) {
      reject("La ruta no existe");
    }
    if (api.absolutePath(path) === false) {
      rutaAbsoluta = api.absolute(path);
    }
    if (api.mdFile(rutaAbsoluta) === false) {
      reject("No es un archivo MarkDown");
    }
    api.readFile(rutaAbsoluta).then((content) => {
      if (api.getLinks(content, rutaAbsoluta) === []) {
        reject("El archivo no tiene links");
      }
      if () {
      }
      else {
        const result= api.getLinks(content, rutaAbsoluta)
        resolve(result)
        
      }
    });

    // [{ - - - }]
    // [{ - - - - -},  ...]
  });
};

console.log(mdLinks("./README.md"));
