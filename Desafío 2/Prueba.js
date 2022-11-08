const Contenedor = require ("./index.js")

const primerItem = {
    title: "Escuadra",
    price: 123.45,
    thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
    id: 1
}

const segundoItem = {
    title: "Calculadora",
    price: 234.56,
    thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
    id: 2
}

const tercerItem = {
    title: "Globo terráqueo",
    price: 345.67,
    thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geography-planet-school-256.png",
    id: 3
}

async function main(){
    const contenedor = new Contenedor("./productos.txt");

    let datos = await contenedor.getAll();
    console.log(datos);

    //PRIMER ITEM
    let primerId = await contenedor.save(primerItem);
    console.log(primerId);

    //SEGUNDO ITEM
    let segundoId = await contenedor.save(segundoItem);
    console.log(segundoId);


    //BUSCAR POR ID QUE EXISTA
    let idExiste = await contenedor.getById(1);
    console.log(idExiste);

    //BUSCAR POR ID QUE NO EXISTA
    let idNoExiste = await contenedor.getById(5);
    console.log(idNoExiste);

    //BORRAR UN ELEMENTO
    await contenedor.deleteById(1);
    let borroPorId = await contenedor.getAll();
    console.log(borroPorId);

    //BORRAR TODO
    await contenedor.deleteAll()
    let borrarTodo = await contenedor.getAll()
    console.log(borrarTodo);
}

main()