var operacion = prompt('Escribir "+" si quieres suma, "-" si quieres restar, "*" si quieres multiplicar, "/" si quieres dividir.')
if (operacion=="+"|| operacion=="-" || operacion=="*" || operacion=="/") {
	var a = parseInt(prompt("Escriba el primer número."));
	var b = parseInt(prompt("Escriba el segundo número."));
}else {
	alert("Escriba bien!!!")
}
function Operaciones (a,b) {
	switch (operacion) {
		case "+":
		var suma = a + b;
		alert("La suma es "+ suma);
			break;
		case "-":
		if (a>b) {
			var resta = a - b;
		}else {
			var resta = b - a;
		}
		alert("La resta es "+ resta);
			break;
		case "*":
		var producto = (a * b);
		alert("La multiplicación es "+ producto);
			break;
		case "/":
		var division = (a / b).toFixed(2);
		alert("La división es "+ division);
			break;
	}
}
Operaciones (a,b);