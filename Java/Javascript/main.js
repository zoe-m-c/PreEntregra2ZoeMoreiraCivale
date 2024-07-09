class Estudiante {
  constructor(a1, a2, a3, a4) {
    this.nombre = a1;
    this.notas = [a2, a3, a4];
  }
  obtenerNotaMaxima() {
    let maxNota = this.notas[0];
    this.notas.forEach((nota) => {
      if (nota > maxNota) {
        maxNota = nota;
      }
    });
    return maxNota;
  }

  obtenerNotaMinima() {
    let minNota = this.notas[0];
    this.notas.forEach((nota) => {
      if (nota < minNota) {
        minNota = nota;
      }
    });
    return minNota;
  }

  calcularPromedio() {
    let suma = 0;
    this.notas.forEach((nota) => {
      suma += nota;
    });
    const promedio = suma / this.notas.length;
    return promedio.toFixed(2);
  }

  notasAscendente() {
    return this.notas.slice().sort(function (a, b) {
      return a - b;
    });
  }

  notasDescendente() {
    return this.notas.slice().sort(function (a, b) {
      return b - a;
    });
  }
}

//gestion de datos
const estudiantes = [];

let nombreDelAlumno = prompt("ingresa su Nombre");
let primera = parseFloat(prompt("ingresa tu 1ra nota"));
let segunda = parseFloat(prompt("ingresa tu 2da nota"));
let tercera = parseFloat(prompt("ingresa tu 3ra nota"));

let nuevoEstudiante = new Estudiante(
  nombreDelAlumno,
  primera,
  segunda,
  tercera
);

estudiantes.push(nuevoEstudiante);

//salida
console.log(estudiantes);
console.log("Nota máxima: " + nuevoEstudiante.obtenerNotaMaxima());
console.log("Nota mínima: " + nuevoEstudiante.obtenerNotaMinima());
console.log("Promedio: " + nuevoEstudiante.calcularPromedio());
console.log("Notas en orden ascendente: " + nuevoEstudiante.notasAscendente());
console.log(
  "Notas en orden descendente: " + nuevoEstudiante.notasDescendente()
);
