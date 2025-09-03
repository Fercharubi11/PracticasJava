/*Añadir al ejercicio anterior que nos diga por cuál de los
 cuatro es divisible (hay que decir todos por los que es divisible)*/
const numero = parseInt(prompt("ingrese un numero"));
if (numero % 2 == 0) {
  document.writeln("El " + numero + " es divisible por 2");
}
if (numero % 3 == 0) {
  document.writeln("<br>" + "El " + numero + " es divisible por 3");
}
if (numero % 5 == 0) {
  document.writeln("<br>" + "El " + numero + " es divisible por 5");
}
if (numero % 7 == 0) {
  document.writeln("<br>" + "El " + numero + " es divisible por 7");
}
