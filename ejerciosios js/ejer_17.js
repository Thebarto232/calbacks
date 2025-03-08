const filtrar = async () => {
    const data = await fetch("../json/ejer_17.json");
    const mensaje = await data.json();
    return mensaje;
  };
  
  fetch("../json/ejer_17.json").then((data) => {
    data.json().then((detalle) =>
    {
      for (let x = 0; x < detalle.length; x++)
      {
        console.log(
          `Usuario: ${detalle[x].equipo} con ${detalle[x].tipo} y vive en ${detalle[x].copas}`
        );
      }
    });
  });   