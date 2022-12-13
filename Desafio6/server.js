import express, {json, urlencoded} from "express";
import routerProductos from "./src/productos.route.js";
import {fileURLToPath} from "url";
import { dirname, join } from "path";
import { engine } from "express-handlebars";
import { Socket } from "socket.io";
import { Server as IOServer } from "socket.io";
// const socket = io();
// import { json } from "express";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
// const PORT = process.env.PORT || 8080;
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/api/productos", routerProductos);
const products = [];
const messages= [];

app.get("/", (req,res)=>{
    res.render("./public/views/form.hbs");
})

app.engine(
    "hbs",
    engine({
        extname: ".hbs",
        defaultLayout: join(__dirname, "./public/layout/main.hbs"),
        layoutsDir: join(__dirname, "./public/"),
        partialsDir: join(__dirname, "./public/partials"),
    })
)

app.set("view engine", "hbs");

app.set("views", join(__dirname, "public"));
app.use(express.static("public"));



let expressServer =app.listen(8080, () =>{
    console.log("Servidor en puerto 8080");
});
const io= new IOServer(expressServer);

io.on("connection", (socket) =>{
    socket.emit("server:product", products);

    socket.on("product: info", (productInfo)=>{
        products.push(productInfo);
        io.emit("server:products", products);
    })

    socket.emit("server:message", messages);
    socket.on("chat:messageInfo", (messageInfo) => {
        messages.push(messageInfo);

        fs.writeFileSync("./chat.txt", JSON.stringify(messages));

        io.emit("server:message", messages);
    });
})

