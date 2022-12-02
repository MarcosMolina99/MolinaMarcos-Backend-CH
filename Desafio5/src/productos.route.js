import { response, Router } from "express";

const routerProductos = Router();
const productos = [
    {
        id: 1,
        name: "Fideos",
        price: 500,
        type: "Comida"
    },
    {
        id: 2,
        name: "Detergente",
        price: 300,
        type: "Limpieza"
    },
    {
        id:3,
        name: "Remera",
        price: 700,
        type: "Ropa"
    }
];

routerProductos.route("/").get((req,res)=>{
    const response = {
        data: productos,
    }
    response.json(response);
})
.post((req,res) =>{
    const {id} = req.params;
    const {name,price,type} = req.body;
    const indexProductToUpdate = productos.find((product) => product.id === Number(id));

    if(!indexProductToUpdate){
        return res.status(404).json({data:null});
    }
    productos.splice(indexProductToUpdate,1,{id,name,price,type});

    res.status(200).json({
        data: {id,name,price,type}
    })
});

routerProductos.route("/:id").put((req,res) =>{
    const {id} = req.params;
    const product = productos.find((product) =>product.id === Number(id));

    const response = product ? {data:product} : {data:null};
    const statusCode = product ? 200 : 404;

    res.status(statusCode).json(response);
}).delete("",(req,res) =>{
    const {id} = req.params;
    const {name,price,type} = req.body;
    const indexProductToUpdate = productos.find((product) => product.id === Number(id));
    const deleteProduct = productos[indexProductToUpdate];

    if(!deleteProduct){
        return res.status(404).json({data:null});
    }
    productos.splice(indexProductToUpdate,1);

    res.status(200).json({
        data: deleteProduct
    })
})
.get((req,res) =>{
    const {id} = req.params;
    const product = productos.find((product) =>product.id === Number(id));

    const response = product ? {data:product} : {data:null};
    const statusCode = product ? 200 : 404;

    res.status(statusCode).json(response);
})
export default routerProductos;