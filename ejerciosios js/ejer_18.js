Promise.all([
    new Promise((mostrar) => setTimeout(() => mostrar(10), 3000)), // 10
    new Promise((mostrar) => setTimeout(() => mostrar(20), 2000)), // 20
    new Promise((mostrar) => setTimeout(() => mostrar(30), 1000)), // 30
  ]).then(alert); // 10,20,30 cuando las promesas están listas: cada promesa constituye un miembro del array