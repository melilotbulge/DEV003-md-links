const fs = require("fs");
const path = require("path");

const mdLinks = (path, options) => {
  // aqui va toda la logica de md links
  // llamar a md links
};

mdLinks("README.md", { validate: true });

// CONSULTAR SI LA RUTA EXISTE
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

const readFile = (mdPath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(mdPath, "utf8", (err, data) => {
      if (err) {
        reject("No fue posible leer el contenido");
      } else {
        resolve(data);
      }
    });
  });
};

//VERIFICAR SI ES UN ARCHIVO MARKDOWN
const mdFile = (mdPath) => path.extname(mdPath);
console.log(mdFile("README.md"));
if (mdFile(".md") === ".md") console.log("Si es un archivo markDown");
else console.log("No es un archivo markDown");

// verificar si tiene links obtener los link
const getLinks = (fileContent, mdPath) => {
  const regExLink = /\[([^\[]+)\](\(.*\))/g;
  const matches = fileContent.match(regExLink);

  //console.log(matches);

  const singleMatch = /\[([^\[]+)\]\((.*)\)/;
  const resultLinks = [];

  for (let i = 0; i < matches.length; i++) {
    let matchedLink = singleMatch.exec(matches[i]);
    let linkObject = {
      href: matchedLink[2],
      text: matchedLink[1],
      file: mdPath,
    };
    resultLinks.push(linkObject);
  }

  return resultLinks;
};

readFile("README.md")
  .then((result) => {
    console.log(result);
    console.log(getLinks(result, "README.md"));
  })
  .catch((err) => {
    console.log(err);
  });

//para validar los link dentro del array (resultLinks) creado en getLinks

module.exports = {
  mdLinks,
  pathexist,
  absolutePath,
  absolute,
  mdFile,
  readFile,
  getLinks,
};
