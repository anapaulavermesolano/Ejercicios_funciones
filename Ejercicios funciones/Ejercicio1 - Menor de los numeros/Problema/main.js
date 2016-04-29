var vector = [];
var menor= 1000000000;
function menorNumero() {	
	for(var i = 0; i <= 4; i++) {
		vector[i]=[];
		vector[i] = parseInt(prompt("Escribe el cualqier numero y te daremos el menor de ellos"));
		if(vector[i]<menor) {
			menor = vector[i];
		}else {
			menor = menor;
		}
	}
	alert("El menor es: "+menor);
}
menorNumero(); 