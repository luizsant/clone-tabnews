const calculadora = require("../models/calculadora.js");

test("somar 2 + 2 retorna 4", () => {
  const resultado = calculadora.somar(2, 2);
  console.log(resultado);
  expect(resultado).toBe(4);
});
