//este algoritmo calcula las calificaciones de un grupo de alumnos (ingresando los datos por teclado).

let nAlumno: string = String(prompt("Ingresar Nombre del Alumno"));
let notaFinal: number;

while (nAlumno !== " ") {
  let nPractica: number = Number(prompt("Ingresar nota de Practica "));
  let nProblema: number = Number(prompt("Ingresar nota de Problema "));
  let nTeorica: number = Number(prompt("Ingresar nota de Teorica "));

  if (
    nPractica >= 0 &&
    nPractica <= 10 &&
    nProblema >= 0 &&
    nProblema <= 10 &&
    nTeorica >= 0 &&
    nTeorica <= 10
  ) {
    notaFinal = Number(nPractica * 0.1 + nProblema * 0.5 + nTeorica * 0.4);
    console.log("Alumno: " + nAlumno, "su nota final: " + notaFinal);
    break;
  } else {
    console.log("erro!! (verificar notas)");
    break;
  }
}

//NOTA: cada ves que guardo, el mismo CodeSandbox me lo desidenta.
