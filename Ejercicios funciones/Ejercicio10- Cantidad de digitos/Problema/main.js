
var cantidad = prompt("Escribe para darte la cantidad de digitos: ");
function cantidadDeDigitos(cantidad) {
	cantidad = cantidad.split('');
	var longitud = cantidad.length;
	console.log(cantidad);
	console.log("La cantidad digitos es "+longitud);
}
cantidadDeDigitos(cantidad);
