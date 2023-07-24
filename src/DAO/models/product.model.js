import { Schema, model } from "mongoose";

export const productModel = model(
    "products", new Schema({
        //first_name: { type: String }
        title: { type: String },
        description: { type: String },
        price: { type: Number },
        thumbnail: { type: String },
        code: { type: Number, max: 4 },
        stock: { type: Number, max: 100 },
        category: { type: String },
        status: { type: Boolean, default: true }
    })
);