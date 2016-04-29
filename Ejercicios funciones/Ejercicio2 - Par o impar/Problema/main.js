function Par_Impar() {
	var numero = Number(prompt("escribe el numero y te diremos si es par o impar"));
	var division = numero % 2;
	if(division === 0) {
		alert("El número "+ numero + " es: par");
	}else {
		alert("El número "+ numero + " es: impar");
	}
}
Par_Impar();