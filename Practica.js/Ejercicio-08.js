// Escribe un programa que pida un número y diga si es divisible por 2
const numero = parseInt(prompt("ingrese un numero"));
if (numero % 2 == 0) {
  document.writeln("el " + numero +  " es divisible");
} else {
  document.writeln("el " + numero +  " no es divisible");
}
