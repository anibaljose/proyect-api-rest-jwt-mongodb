import { json } from "express"
import Product from '../models/Product'

export const getProducts = (req, res) => {
    res.json('get products');    
}

export const createProduct = (req, res) => {
    console.log(req.body);
    res.json('creating product')
}

export const getProductById = (req, res) => {
    
}
export const updateProductById = (req, res) => {
    
}
export const deleteProductById = (req, res) => {
    
}