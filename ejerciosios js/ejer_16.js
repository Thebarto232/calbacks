const filtrar = async () => {
    const data = await fetch("../json/ejer_16.json");
    const mensaje = await data.json();
    return mensaje;
  };
  
  fetch("../json/ejer_16.json").then((data) => {
    data.json().then((evalue) => {
      for (let i = 0; x < evalue.length; i++) {
        if (evalue[i].id[0] === "A") {
          console.log(evalue[i]);
        }
      }
    });
  });