// EJEMPLO: let arregloClientes : number[] = new Array(30);

//cantida de personas menores de 21 años.
//personas mayores o igual a 21 años.
//cuantas personas en total.

let totalDePersonas: number[] = new Array(10);
//let edad: number;
let indice: number;
let mayoresDeEdad: number = 0;
let menoresDeEdad: number = 0;
//
function edad(tope: number) {
  return Math.floor(Math.random() * tope);
}

for (indice = 0; indice < 10; indice++) {
  totalDePersonas[indice] = edad(40);
  if (totalDePersonas[indice] > 21) {
    console.log("Persona MAYOR: " + totalDePersonas[indice]);
    mayoresDeEdad++;
  } else {
    console.log("menor de edad: " + totalDePersonas[indice]);
    menoresDeEdad++;
  }
}
console.log("Cantidad de personas mayores a 21 años:" + mayoresDeEdad);
console.log("Cantidad de personas MENOR a 21 años:" + menoresDeEdad);
//function Azar(tope: number) {return Math.floor(Math.random() * tope)}
