import { Router } from "express";
import __dirname from "../utils/dirname.js"
import path from "path";

const router = Router();

router.route("/",(req,res) =>{
    res.sendFile(path.join(__dirname, "../html/productForm.html"))
})

export default router;