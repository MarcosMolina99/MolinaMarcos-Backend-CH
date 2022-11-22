import express, {json, urlencoded} from "express";
import routerProductos from "./routes/productos.route.js"
import baseRouter from "./routes/base.route.js"
const app = express();
app.use(json());

app.use(urlencoded({}))

app.use((req,res,next) =>{
    console.log(`X ${req.method} - ${req.path}`);
    next();
})
app.use("/api/productos", routerProductos)
app.use("/", baseRouter);


app.listen(3000, (error) =>{
    if(error){
        console.log("Error al iniciar la app", error);
    } else{
        console.log("Servidor escuchando puerto 3000");
    }
})