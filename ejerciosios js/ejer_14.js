const mensaje = "Promesa resuelta";

const miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promesa rechazada"); // Rechazamos la promesa después de 2 segundos
    }, 2000);
});

// Manejo del error con .catch()
miPromesa
    .then(mensaje => console.log(mensaje)) // No se ejecutará porque la promesa se rechaza
    .catch(error => console.log("Error:", error)); // Captura el error y lo muestra
