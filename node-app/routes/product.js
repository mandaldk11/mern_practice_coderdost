const productRouter = require('express').Router();
const { createProducts, getAllProducts, getProduct, replaceProduct, updateProduct, deleteProduct } = require('../controllers/product')
productRouter
    .post('/products', createProducts)
    .get('/products', getAllProducts)
    .get('/products/:id', getProduct)
    .put('/products/:id', replaceProduct)
    .patch('/products/:id', updateProduct)
    .delete('/products/:id', deleteProduct)

module.exports = productRouter