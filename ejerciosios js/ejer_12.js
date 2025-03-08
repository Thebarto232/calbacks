
async function ejecucion_asin() {
    await new Promise(res => setTimeout(res, 1000)); // Espera 1 segundo
    return "Operación completada"; // Devuelve el mensaje
}

// Uso de la función
ejecucion_asin().then(console.log);
