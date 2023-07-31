import express from "express";
export const routerCart = express.Router();
import { cartModel } from "../DAO/models/cart.model.js";

/* DELETE api/carts/:cid/products/:pid
 deberá eliminar del carrito el producto seleccionado. */

routerCart.get("/:cid/products/:pid", async (req, res) =>{
    let carrito = await cartModel.find().populate("products.product");
    //cid --- toma referencia el carrito
    //pid: --- referencia del producto;
    const { cid, pid }  = req.params;
    console.log(cid);
    console.log(pid);
    //teniendo como primer parametro, en este el carrito
    //hacer un filtrado en el carrito que, obtenga el id del prod
    //a borrar. finalmente se actualiza el carrito.

    
    const findCart = await cartModel.findOne({_id: cid});
    const filtrado = findCart.products.filter(product => product.product == pid);
    console.log(filtrado);
    //findCart.products.deleteOne()
    let authCart = await cartModel.updateOne({_id: cid}, findCart);
    console.log(authCart);

    return res.status(200).json(
            {status: "ok!",
            msg: "encontramos algo",
            data: cid, pid});
    //console.log(pid);
});

/* routerCart.post("/", async (req, res)=>{
    const {idCart} = req.body;
    const createProd = await cartManager.createCart(idCart);

    if (createProd) {
        return res.status(201).json(
            {message: "product add successfully!",    
             data: req.body
            });
    }else{
        return res.status(404).json(
            {error: "error, bad response",    
             data: {}
            });
    };

});

routerCart.get("/:cid", async (req, res)=>{
    const cid = req.params.cid;
    const prodCart = await cartManager.getCart(cid);

    if(prodCart != undefined){
        return res.status(201).json(
            {message: "Producto del carrito: ",    
             data: prodCart
            }); 
    }else{    
        return res.status(404).json(
        {message: "No existe el producto con el id: " + cid,    
         data: {}
        });
    }
});

routerCart.post("/:cid/products/:pid", async (req, res) =>{
    let cid = req.params.cid;
    let pid = req.params.pid;

    cid = req.body;
    pid = req.body;

    //console.log(cid, pid);

    const addprod = await cartManager.addItem(cid, pid);

    if(addprod != undefined){
        return res.status(201).json(
            {message: "add successully!",    
             data: addprod
            }); 
    }else{    
        return res.status(404).json(
        {message: `bad request ${cid}, ${pid}`,    
         data: {}
        });
    }
}) */