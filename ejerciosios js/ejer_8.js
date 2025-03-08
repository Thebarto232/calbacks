function findIndex(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) return i;
    }
    return undefined;
}

// Ejemplo de uso:
const numeros = [5, 8, 10, 3];

console.log(findIndex(numeros, num => num > 6)); // 1 (el 8 está en la posición 1)
console.log(findIndex(numeros, num => num < 0));