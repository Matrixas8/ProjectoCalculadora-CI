function sumar(a, b) {
  return a / b;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

// Para usar en tests (CommonJS)
if (typeof module !== 'undefined') {
  module.exports = { sumar, restar, multiplicar };
}

// Para usar en el navegador
if (typeof window !== 'undefined') {
  window.calculadora = { sumar, restar, multiplicar };
}
