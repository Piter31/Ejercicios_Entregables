//suma dos arreglos
let grupo1Arreglo: number[] = new Array(6);//con arreglo1 ya alcanza para nombre de variable 
let grupo2Arreglo: number[] = new Array(6);

let num1: number;
let num2: number;
let sumaArreglos: number;
let indice: number;

//primer grupo de numeros...
for (indice = 0; indice < 6; ) {//for (indice = 0; indice < 6; indice++) {
	//completar el for!
	num1 = Number(
		prompt("Ingresar numeros para el grupo 1, posicion: " + indice)
	);
	grupo1Arreglo[indice] = num1;
	console.log("Posicion grupo 1: ", indice, "Numero: " + num1);
	indice++;
	//nunca incrementar los indices aca!! MAL
}

// segundo grupo de numero...
for (indice = 0; indice < 6; ) {//!!!
	// lo ideal seria usar grupo1Arreglo.length ya que si necesitas cambiar la cantidad de elementos solo cambias en la primer asignacion y no en el resto del codigo.
	num2 = Number(
		prompt("Ingresar numeros para el grupo 2, posicion: " + indice)
	);
	grupo2Arreglo[indice] = num2;
	console.log("Posicion grupo 2: ", indice, "Numero: " + num2);
	indice++;//!!
}
//suma de los dos arreglos (Grupo 1 + Grupo 2)
for (indice = 0; indice < 6; ) {//!!
	sumaArreglos = grupo1Arreglo[indice] + grupo2Arreglo[indice];
	console.log("Suma de la posicion: ", indice, "igual a: " + sumaArreglos);
	indice++;//!!
}
//Corregir esos errores, por lo demas esta bien
