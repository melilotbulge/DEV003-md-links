const {
  mdLinks,
  pathexist,
  mdFile,
  absolutePath,
  absolute,
} = require("../api.js");

describe("mdLinks", () => {
  it("debería ser una función", () => {
    expect(typeof mdLinks).toBe("function");
  });
});

describe("pathexist", () => {
  it("debería ser una función", () => {
    expect(typeof pathexist).toBe("function");
  });
  it("debería ser una función", () => {
    expect(pathexist("README.md")).toBe(true);
  });
});
describe("mdFile", () => {
  it("debería ser una función", () => {
    expect(typeof mdFile).toBe("function");
  });
});
describe("absolutePath,", () => {
  it("debería ser una función", () => {
    expect(typeof absolutePath).toBe("function");
  });
});
describe("absolute,", () => {
  it("debería ser una función", () => {
    expect(typeof absolute).toBe("function");
  });
});
