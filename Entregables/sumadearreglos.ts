//suma dos arreglos
let grupo1Arreglo: number[] = new Array(6);
let grupo2Arreglo: number[] = new Array(6);

let indice: number;
//primer grupo de numeros...
let num1: number;
for (indice = 0; indice < 6; ) {
	num1 = Number(
		prompt("Ingresar numeros para el grupo 1, posicion: " + indice)
	);
	grupo1Arreglo[indice] = num1;
	console.log("Posicion grupo 1: ", indice, "Numero: " + num1);
	indice++;
}

// segundo grupo de numero...
let num2: number;
for (indice = 0; indice < 6; ) {
	num2 = Number(
		prompt("Ingresar numeros para el grupo 2, posicion: " + indice)
	);
	grupo2Arreglo[indice] = num2;
	console.log("Posicion grupo 2: ", indice, "Numero: " + num2);
	indice++;
}
//suma de los dos arreglos (Grupo 1 + Grupo 2)
