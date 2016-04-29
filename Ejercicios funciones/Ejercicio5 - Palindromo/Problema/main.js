var mensaje = prompt('Ingresar una cadena:')
mensaje= mensaje.split(' ').join('');
mansaje = mensaje.toLowerCase()
function Palindromo(mensaje) {
var long = mensaje.length
    if (long == 0) {
    	return false;
    }

    for( var i =0; i<(long/2); i++ ) {
        if (mensaje[i] === mensaje[long - 1 - i]) {
        	console.log('Es palindrome.');
        } 
        else console.log('No es palindrome');
    	}
}
Palindromo(mensaje);