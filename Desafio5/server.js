import express, {json, urlencoded} from "express";
import routerProductos from "./src/productos.route.js";
import {fileURLToPath} from "url";
import { dirname, join } from "path";
import { engine } from "express-handlebars";
// import { json } from "express";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8080;
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/api/productos", routerProductos);

app.get("/", (req,res)=>{
    res.render("form.hbs");
})

app.engine(
    "hbs",
    engine({
        extname: ".hbs",
        defaultLayout: join(__dirname, "public/layouts/main.hbs"),
        layoutsDir: join(__dirname, "public/form.hbs"),
        partialsDir: join(__dirname, "public/showProduct.hbs"),
    })
)

app.set("view engine", "hbs");

app.set("views", join(__dirname, "public/views"));
app.use(express.static("public"));

app.listen(8080, () =>{
    console.log("Servidor en puerto 8080");
});