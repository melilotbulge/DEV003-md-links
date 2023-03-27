const fs = require("fs");
const path = require("path");

const mdLinks = (path, options) => {
  // aqui va toda la logica de md links
  // llamar a md links
};

mdLinks("README.md", { validate: true });

// CONSULTAR SI LA RUTA EXISTENOD
const pathexist = (mdPath) => fs.existsSync(mdPath);
//return fs.existsSync(mdPath);
console.log(pathexist("README.md"));

//VERIFICAR SI LA RUTA ES ABSOLUTA O NO

const absolutePath = (mdPath) => path.isAbsolute(mdPath);
// return path.isAbsolute(mdPath);
console.log(absolutePath("README.md"));

// SINO ES ABSOLUTA CAMBIAR A ABSOLUTA
const absolute = (mdPath) => path.resolve(mdPath);
console.log(absolute("README.md"));

//leer el archivo ir a const mdlinks linea 4

//VERIFICAR SI ES UN ARCHIVO MAR
const mdFile = (mdPath) => path.extname(mdPath);
console.log(mdFile("README.md"));
if (mdFile("README.md") === ".md") console.log("Si es un archivo markDown");
else console.log("No es un archivo markDown");

// verificar si tiene links

//obtener los link

module.exports = {
  mdLinks,
  pathexist,
  absolutePath,
  absolute,
  mdFile,
};
