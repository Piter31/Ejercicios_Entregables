//* devuelve verdadero o falso si el 1er numero ingresado es multipolo del 2do ingresado

//rotulo1.innerHTML = "Indique el número a verificar: ";
//rotulo2.innerHTML = "Indique el número múltiplo: ";

let numero1: number = Number(prompt("Ingrese un Numero entero:"));
let numero2: number = Number(prompt("Ingresar un segundo Numero entero:"));

function esMultiplo(dividendo: number, divisor: number) {
	let resto: number;

	console.log(dividendo % divisor === 0);
	resto = dividendo % divisor;
	if (resto === 0) {
		console.log("El numero: " + dividendo, "es multiplo de: " + divisor);
	} else {
		console.log("El numero: " + dividendo, "NO es multiplo de: " + divisor);
	}
}

esMultiplo(numero1, numero2);
