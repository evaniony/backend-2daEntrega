import express from "express";
import { __dirname } from "./dirname.js";
import handlebars from 'express-handlebars';
import { routerProducts } from "./routes/products.routes.js";
import { routerCart } from "./routes/cart.routes.js"
import { connectMongo } from "./utils.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded( {extended: true} ));

app.use("/products", routerProducts);
app.use("/carts", routerCart);

connectMongo();

app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");


app.listen(8080, () =>{
    console.log("port is on 8080!");
});

app.use("*", (req, res)=>{
    res.status(400).send(
        {status: "error",
        msg: "Error, la ruta no existe;",
        data: {}})
})