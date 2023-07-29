//import mongoose
const mongoose = require('mongoose');

//create a schema for products
const productSchema = new mongoose.Schema({
    name: {
        type : String,
        required : true
    },

    quantity: {
        type: Number,
        required: true,
    },
},
{timestamps: true}); //timestamps will automatically create a field for when the product was created and when it was updated

//create a model for products
const Product = mongoose.model('Product', productSchema);

//export the model
module.exports = Product;