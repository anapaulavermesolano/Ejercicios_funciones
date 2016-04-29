var suma = 0;
alert("Vamos a hallar el cuadrado de la suma de dos números.");
var a = parseInt(prompt("Escriba el primer número."));
var b = parseInt(prompt("Escriba el segundo número."));
function cuadrado (a,b) {
	  suma = a + b;
	  resultado = Math.pow(suma, 2);
	  alert("el cuadrado de la suma es " + resultado);
}
cuadrado (a,b);