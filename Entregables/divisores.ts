//devuelve los divisores de un numero entero...

let numero: number = Number(prompt("Ingrese un Numero entero:"));

function cantidadDeDivisores(numero: number) {
	let resto: number;
	let divisor: number = 1;
	let cantDiv: number = 0;
	while (divisor <= numero) {
		resto = numero % divisor;
		//	console.log("el resto es: " + resto);
		if (resto === 0) {
			cantDiv++;
		}
		divisor++;
	}
	console.log(
		"La cantidad de divisores que tiene el numero ingresado es: " + cantDiv
	);
}
cantidadDeDivisores(numero);
