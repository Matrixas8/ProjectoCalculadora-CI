//Toma y actualiza los datos de la calculadora en el HTML

function calcular() {
  const num1 = Number(document.getElementById('num1').value);
  const num2 = Number(document.getElementById('num2').value);
  const op = document.getElementById('operation').value;
  let resultado;

  switch(op) {
    case 'sumar':
      resultado = num1 + num2;
      break;
    case 'restar':
      resultado = num1 - num2;
      break;
    case 'multiplicar':
      resultado = num1 * num2;
      break;
  }

  document.getElementById('resultado').innerText = `Resultado: ${resultado}`;
}
