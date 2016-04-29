var numero = Number(prompt("Escribe el número"));
function numeroPrimo () {
	if (numero === 2 || numero === 3) {
		alert("Es un numero primo")
	}else if (numero % 2 === 0 || numero % 3 === 0 || numero === 1 || numero === 0) {
		alert("No es un numero primo");
	}else {
		alert("Es un numero primo");
	}
}
numeroPrimo ();