const imprima = async () => {
    const data = await fetch('../json/ejer_15.json')
    const mensaje = await data.json()
    return mensaje;
}

imprima().then((data) =>
    {
        console.log(data);
    })
fetch('../json/ejer_15.json').then((data) => {
    data.json().then((imprima) => {
        console.log(imprima);

    })
});