const fs = require("fs");
const path = require("path");

//mdLinks("README.md", { validate: true });

// CONSULTAR SI LA RUTA EXISTE
const pathexist = (mdPath) => fs.existsSync(mdPath);

console.log(pathexist("README.md"));

//VERIFICAR SI LA RUTA ES ABSOLUTA O NO

const absolutePath = (mdPath) => path.isAbsolute(mdPath);

console.log(absolutePath("README.md"));

// SINO ES ABSOLUTA CAMBIAR A ABSOLUTA
const absolute = (mdPath) => path.resolve(mdPath);
console.log(absolute("README.md"));

//leer el archivo ir a const mdlinks linea 4

//VERIFICAR SI ES UN ARCHIVO MARkdown
const mdFile = (mdPath) => {
  const ext = path.extname(mdPath);
  if (ext === ".md") {
    return true;
  } else {
    return false;
  }
};
console.log(mdFile("package.json"));

// verificar si tiene links

//obtener los link

module.exports = {
  //mdLinks,
  pathexist,
  absolutePath,
  absolute,
  mdFile,
};
