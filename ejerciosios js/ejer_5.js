function every(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (!callback(array[i])) {
            return false;
        }
    }
    return true;
}

// Ejemplo de uso:
const numeros = [2, 4, 6, 8];
const esPar = num => num % 2 === 0;

console.log(every(numeros, esPar)); // true

const numerosMixtos = [2, 3, 6, 8];
console.log(every(numerosMixtos, esPar)); // false
