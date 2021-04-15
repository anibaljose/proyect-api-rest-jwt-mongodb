import { json } from "express"
import Product from '../models/Product'

export const getProducts = async (req, res) => {
   const products = await Product.find(); 
   res.json(products);
}

export const createProduct = async (req, res) => {
    const {name, category, price, imgUrl} = req.body

    const newProduct = new Product({name, category, price, imgUrl});
    //i add "await" and "async""" in the name of the main function, to wait for the function to finish
    const productSaved = await newProduct.save();
    res.status(201).json(productSaved)
}

export const getProductById = async (req, res) => {
    const product = await Product.findById(req.params.productId);
    res.status(200).json(product)
}

export const updateProductById = async (req, res) => {
    
}

export const deleteProductById = async(req, res) => {
    
}