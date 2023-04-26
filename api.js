const fs = require("fs");
const path = require("path");

// Valida si la ruta existe
const pathexist = (mdPath) => fs.existsSync(mdPath);
console.log(pathexist("READMEKL.md"));

//Verificar si la ruta es absoluta

const absolutePath = (mdPath) => path.isAbsolute(mdPath);
console.log(absolutePath("READMEKL.md"));

// Cambia una ruta a absoluta
const absolute = (mdPath) => path.resolve(mdPath);
console.log(absolute("READMEKL.md"));

//leer el archivo

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

//Verifica si es un archivo MarkDown de acuerdo a la extension
const mdFile = (mdPath) => path.extname(mdPath);
console.log(mdFile("README.md"));
if (mdFile("README.md") === ".md") console.log("Si es un archivo markDown");
else console.log("No es un archivo markDown");

// verificar si tiene links obtener los link
const getLinks = (fileContent, mdPath) => {
  const regExLink = /\[([^\]]+)\]\((http[s]?:\/\/[^\)]+)\)/g;
  const matches = fileContent.match(regExLink);

  const singleMatch = /\[([^\]]+)\]\((http[s]?:\/\/[^\)]+)\)/;
  const resultLinks = [];

  for (let i = 0; i < matches.length; i++) {
    let matchedLink = singleMatch.exec(matches[i]);
    //console.log(matchedLink);
    let linkObject = {
      href: matchedLink[2],
      text: matchedLink[1],
      file: mdPath,
    };
    resultLinks.push(linkObject);
  }

  return resultLinks;
};

//para validar los link dentro del array (resultLinks) creado en getLinks

const validateLinks = (linksArray) => {
  const resultLinks = linksArray.map((links) => {
    // console.log(links);
    return fetch(links.href)
      .then((response) => {
        return {
          href: links.href,
          text: links.text,
          file: links.file,
          status: response.status,
          message: response.statusText,
        };
      })
      .catch((error) => {
        return {
          href: links.href,
          text: links.text,
          file: links.file,
          status: "Url error",
          message: "Error",
        };
      });
  });
  return Promise.all(resultLinks);
};

readFile("READMEKL.md")
  .then((result) => {
    // console.log(result);
    //console.log(getLinks(result, "READMEKL.md"));
    const links = getLinks(result, "READMEKL.md");
    //   //console.log(links);
    validateLinks(links).then((arrayOfLinks) => {
      console.log(arrayOfLinks);
    });

    console.log(validateLinks());
  })
  .catch((err) => {
    //console.log(err);
  });

module.exports = {
  pathexist,
  absolutePath,
  absolute,
  mdFile,
  readFile,
  getLinks,
};
