function Mayúscula_Minúscula () {
	 var texto = prompt("Escribe un texto");
	 var i = texto.length;
	 if(texto === texto.toUpperCase()) {
	 	alert("Todo esta en mayúscula.");
	 }else if (texto === texto.toLowerCase()){
	 	alert("Todo esta en minúscula.");
	 }else {
	 	alert("Tiene palabras en mayúsculas y minúsculas.")
	 }
}	
Mayúscula_Minúscula ()			