// Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
const num1 = parseInt(prompt("ingrese el primer numero"));
const num2 = parseInt(prompt("ingrese el segundo numero"));
const num3 = parseInt(prompt("ingrese el tercer numero"));
if (num1 > num2) {
  document.writeln(num1);
} else {
  if (num2 > num1) {
    document.writeln(num2);
  } else {
    if (num3 > num1 && num2) {
      document.writeln(num3);
    }
  }
}
