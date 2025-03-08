let lis = ["colombia", "peru", "argentina", "brasil"];
let list = []; // Lista donde se agregarán los países seleccionados

let seleccion = prompt("Seleccione el país que quiere buscar:");

// Filtramos el país seleccionado
let filtrado = lis.filter((pais) => pais === seleccion);

// Callback que agrega a list el país filtrado
const callback = (resultado) => {
  if (resultado.length > 0) {
    list.push(...resultado); // Usamos spread (...) para agregar el contenido del array
    return `Se agregó: ${resultado[0]}`;
  }
};

// Llamamos la función y mostramos el resultado
console.log(callback(filtrado));
console.log("Lista actualizada:", list); // Ver lista con países agregados
