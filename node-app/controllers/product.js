
const Product = require('../model/product')

const createProducts = async (req, res) => {
    try {
        let product = new Product(req.body);
        await product.save()
        res.status(201).json(product)
    } catch (err) {
        res.status(400).json(err)
    }

}

const getAllProducts = async (req, res) => {
    try {
        let products = await Product.find();
        res.status(200).json(products)
    } catch (err) {
        res.status(404).json(err.message)
    }

}

const getProduct = async (req, res) => {
    try {
        let id = req.params.id;
        let product = await Product.findById(id)
        res.status(200).json(product)
    } catch (err) {
        res.status(404).json(err)
    }

}

const replaceProduct = async (req, res) => {
    try {
        let id = req.params.id;
        let product = await Product.findOneAndReplace({ _id: id }, req.body, { new: true })
        res.status(201).json(product)
    } catch (err) {
        console.log(err)
        res.status(404).json(err)
    }

}

const updateProduct = async (req, res) => {
    try {
        let id = req.params.id;
        let product = await Product.findOneAndUpdate({ _id: id }, req.body, { new: true })
        res.status(201).json(product)
    } catch (err) {
        console.log(err)
        res.status(404).json(err)
    }
}

const deleteProduct = async (req, res) => {
    try {
        let id = req.params.id;
        let product = await Product.findOneAndDelete({ _id: id })
        res.status(201).json(product)
    } catch (err) {
        console.log(err)
        res.status(404).json(err)
    }
}

module.exports = { createProducts, getAllProducts, getProduct, replaceProduct, updateProduct, deleteProduct }