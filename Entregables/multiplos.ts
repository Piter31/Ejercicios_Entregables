//* devuelve verdadero o falso si el 1er numero ingresado es multipolo del 2do ingresado

//rotulo1.innerHTML = "Indique el número a verificar: ";
//rotulo2.innerHTML = "Indique el número múltiplo: ";

let numero1: number = Number(prompt("Ingrese un Numero entero:"));
let numero2: number = Number(prompt("Ingresar un segundo Numero entero:"));

function esMultiplo(numero1: number, numero2: number) {
	let resto: number;
	let dividendo: number;
	let divisor: number;

	console.log((resto = dividendo % divisor));
	//	if (numero1 % numero2 === 0)
	if (resto) {
		console.log("El numero: " + numero1, "es multiplo de: " + numero2);
		//	} else {
		console.log("El numero: " + numero1, "NO es multiplo de: " + numero2);
	}
}

esMultiplo(numero1, numero2);
