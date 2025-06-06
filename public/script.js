function calcular() {
  const num1 = Number(document.getElementById('num1').value);
  const num2 = Number(document.getElementById('num2').value);
  const op = document.getElementById('operation').value;
  let resultado;

  switch(op) {
    case 'sumar':
      resultado = window.calculadora.sumar(num1, num2);
      break;
    case 'restar':
      resultado = window.calculadora.restar(num1, num2);
      break;
    case 'multiplicar':
      resultado = window.calculadora.multiplicar(num1, num2);
      break;
  }

  document.getElementById('resultado').innerText = `Resultado: ${resultado}`;
}
