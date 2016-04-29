var a = [];
function menorNumero () {
	menor = 100000000;
	for(var i = 0; i <= 2; i++) {
		a[i] = [];
		a[i] = parseInt(prompt("Escribe el número para ordenar de menor a mayor.")); 
		if (a[i]<menor) {
			menor = a[i];
		}else {
			menor = menor;
		}
	} 
}
menorNumero ();
alert(menor);
