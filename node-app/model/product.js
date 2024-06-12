const mongoose = require('mongoose')
const { Schema } = mongoose;

const productSchema = new Schema({
    title: { type: String, required: true },
    description: String,
    price: { type: Number, min: [10, 'min price is low'] },
    rating: { type: Number, min: [0, 'min rating is 0'], max: [5, 'extend limit og rating'] },
    brand: String,
    images: [String]
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product