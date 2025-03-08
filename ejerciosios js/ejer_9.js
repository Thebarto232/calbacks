
setTimeout(() => {
    let i = 0;
    
    setTimeout(() => alert(i), 100); //?
    setTimeout(
      () =>
        alert(
          "Despues del bucle porque se ejecutara en 0.1 segundos y ya habra realizado el for entonces muestra 100000000"
        ),
      1000
    );
    
    // se ejecuta  despues de un  tiempo  la funcion es > 100 ms
    for (let j = 0; j < 100000000; j++) {
      i++;
    }
    }, 1000);