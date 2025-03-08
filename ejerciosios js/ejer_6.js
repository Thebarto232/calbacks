function some(array, callback) {
    // Recorremos cada elemento del array
    for (let i = 0; i < array.length; i++) {
        // Si el callback devuelve true para algún elemento, retorna true de inmediato
        if (callback(array[i])) {
            return true;
        }
    }
    // Si ningún elemento cumple la condición, retorna false
    return false;
}



// Array de números
const numeros = [1, 3, 5, 7];

// Función que verifica si un número es par
const esPar = num => num % 2 === 0;

console.log(some(numeros, esPar)); // false (ningún número es par)

const numerosMixtos = [1, 3, 4, 7];

console.log(some(numerosMixtos, esPar)); // true (porque 4 es par)