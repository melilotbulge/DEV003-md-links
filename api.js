// consultar si la ruta existe
const fs = require("fs");
//const path = require("path");
const mdLinks = (path, options) => {
  // aqui va toda la logica de md links
  // llamar a md links
};

mdLinks("README.md", { validate: true });

const pathexist = (mdPath) => fs.existsSync(mdPath);

console.log(pathexist("README.md"));

//verificar si la ruta es absoluta o no

// sino es absoluta convertirla en absoluta

//leer el archivo

//verificar si un archivo md

// verificar si tiene links

//obtener los link

module.exports = {
  mdLinks,
  pathexist,
};
