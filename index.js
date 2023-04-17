module.exports = () => {
  // ...
};

const api = require("./api.js");

const mdLinks = (path, options) => {
  // aqui va toda la logica de md links
  // llamar a md links
};

mdLinks("README.md", { validate: true });

const mdLinks = (path, options) => {
  // aqui va toda la logica de md links
  // llamar a md links
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

const validateLinks = (linksl) => {
  const linksValidados = arraydelinks.map((links) => {
    const fetchResponse = fetch(links.href)
      .then((response) => {
        return {
          href: links.href,
          text: links.text,
          file: links.file,
          status: response.status,
          ok: response.statusText,
        };
      })
      .catch((error) => {
        return "error";
      });
  });

  console.log(validateLinks(linksValidados));
};

const validateLinks = (res) => {
  const linksValidados = arraydelinks.map((links) => {
    const fetchResponse = fetch(links.href)
      .then((response) => {
        return {
          href: links.href,
          text: links.text,
          file: links.file,
          status: response.status,
          ok: response.statusText,
        };
      })
      .catch((error) => {
        return "error";
      });
  });

  console.log(validateLinks(linksValidados));
};
