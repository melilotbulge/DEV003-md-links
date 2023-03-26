const { mdLinks, pathexist } = require("../api.js");

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
