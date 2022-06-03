// EJEMPLO: let arregloClientes : number[] = new Array(30);

//cantida de personas menores de 21 años.
//personas mayores o igual a 21 años.
//cuantas personas en total.

let persona: string;
let edad: number;

//
persona = String(prompt("Ingresar nombre de la persona "));
edad = Number(prompt("Ingresar edad de la persona "));
if (edad > 21) {
  console.log("Nombre de la Persona: " + persona, "edad: " + edad);
}

//function Azar(tope: number) {
//  return Math.floor(Math.random() * tope);
//}
