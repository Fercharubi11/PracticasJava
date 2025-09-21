// Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
const num1 = parseInt(prompt("ingrese el primer numero"));
const num2 = parseInt(prompt("ingrese el segundo numero"));
if (num1 > num2) {
  document.writeln("El " + num1 + " es el numero mas grande");
} else {
  document.writeln("El " + num2 + " es el numero mas grande");
}
