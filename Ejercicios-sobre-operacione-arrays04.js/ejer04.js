//1. Agregar y Eliminar Elementos

//const frutas = ["manzana", "banana", "pera"]; lo pongo como comentario para que no de error ya que hay mas de un cons de frutas en el mismo codigo 

frutas.push("naranja"); // Agrega "naranja" al final del array
frutas.pop();           // Elimina el último elemento ("naranja")

console.log(frutas); // ["manzana", "banana", "pera"]


//2. Array Bidimensional

const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(matriz[1][1]); // 5


//3. Iterar sobre un Array


const frutas = ["manzana", "banana", "pera"]; 

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}


//4. Uso de map

function elevarAlCuadrado(numeros) {
  return numeros.map(numero => numero ** 2);
}

// ejemplo de uso:
// console.log(elevarAlCuadrado([2, 3, 4])); // [4, 9, 16]


//5. Uso de filter

function filtrarMayoresDe(numeros, referencia) {
  return numeros.filter(numero => numero > referencia);
}

// ejemplo de uso:
// console.log(filtrarMayoresDe([5, 12, 8, 20, 3], 10)); // [12, 20]


//6. Uso de reduce

function sumarElementos(numeros) {
  return numeros.reduce((acumulador, actual) => acumulador + actual, 0);
}

// Ejemplo de uso:
// console.log(sumarElementos([1, 2, 3, 4])); // 10


//7. Uso de some

//const numeros = [4, 8, 15, 3]; para que no de error con el otro const de numeros 

const hayMayorA10 = numeros.some(numero => numero > 10);
console.log(hayMayorA10); // true (porque 15 es mayor a 10)


//8. Uso de every
const numeros = [5, 12, 8, 20]; 

const todosPositivos = numeros.every(numero => numero > 0);
console.log(todosPositivos); // true (todos son mayores que 0)


//9. Uso de find

const personas = [
  { nombre: "Lucía", edad: 25 },
  { nombre: "Carlos", edad: 35 },
  { nombre: "Mateo", edad: 40 }
];

const primeraMayorDe30 = personas.find(persona => persona.edad > 30);
console.log(primeraMayorDe30); // { nombre: 'Carlos', edad: 35 }


//10. Uso de sort

const palabras = ["zebra", "auto", "casa", "barco"];

// sort() ordena los elementos alfabéticamente (modifica el array original)
palabras.sort();

console.log(palabras); // ["auto", "barco", "casa", "zebra"]