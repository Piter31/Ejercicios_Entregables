//algunos Ejemplos...

//let aleatorio = Math.random();
//console.log("Numero: "+ aleatorio);
let numMinMax: number[] = new Array(10);

let min: number = 19;
let max: number = 40;

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
for (let i = 0; i < 10; i++) {}

aleatorio(min, max);
console.log("El numero minimo es:" + min, "y el maximo:" + max);

//funcion
//function numeroAleatorioDecimales(min, max) {
//  let num = Math.random() * (max - min);
//  return num + min;
//}

//numeroAleatorioDecimales(min, max);
//console.log("numero minimo:" + min, "maximo:" + max);
