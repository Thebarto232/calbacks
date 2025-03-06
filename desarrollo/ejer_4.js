let lis = ["colombia", "peru", "argentina", "brasil"];
let list = []; // Aseguramos que sea un array vacío

let seleccion = prompt("Seleccione el país que quiere buscar:");

// Filtrar el país seleccionado
let filtrado = lis.filter((pais) => pais === seleccion);

const callback = (resultado) => {
  if (resultado.length > 0) {
    list.push(resultado[0]); // Agregar solo el país encontrado
    return `Se agregó: ${resultado[0]}`;
  } else {
    return "País no encontrado.";
  }
};

// Llamamos la función y mostramos el resultado
console.log(callback(filtrado));
console.log("Lista actualizada:", list); // Mostramos la lista con los países agregados