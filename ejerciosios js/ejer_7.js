function find(array, callback) {
    // Recorremos cada elemento del array
    for (let i = 0; i < array.length; i++) {
        // Si el callback devuelve true para algún elemento, lo retornamos
        if (callback(array[i])) {
            return array[i];
        }
    }
    // Si ningún elemento cumple la condición, retornamos undefined
    return undefined;
}

// Ejemplo de uso:

// Array de números
const numeros = [3, 7, 10, 15, 20];

// Función que verifica si un número es par
const esPar = num => num % 2 === 0;

console.log(find(numeros, esPar)); // 10 (es el primer número par en el array)

const numerosImpares = [3, 7, 9, 15];

console.log(find(numerosImpares, esPar)); // undefined (no hay números pares)