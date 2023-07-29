const Products = require('../models/products');  //importing the products model

//see all products
module.exports.getAll = async function(req, res){
    try{
        //find all products
        let products = await Products.find({});

        //return all products in json format
        return res.status(200).json({
            products: products,
            message: "List of all products"
        });
    }
    catch(err){
        console.log('Error', err);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}


//create a new product
module.exports.create = async function(req, res){
    try{
        //check if name and quantity are given in request
        if(req.query.name && req.query.quantity){
            //create a new product with the given name and quantity in database
            let product = await Products.create(req.query);

            //return the product in json format
            return res.status(200).json({
                product: product,
                message: "Product Created Successfully"
            });
        }
        else{
            return res.status(200).json({
                message: "Give name and quantity to Create a product"
            });
        }
    }
    catch(err){
        console.log('Error', err);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}


//delete a product
module.exports.destroy = async function(req, res){
    try {
        //find the product with the given id
        let product = await Products.findById(req.params.id);
        //if product exists, delete it
        if(product){
            await product.deleteOne();
            return res.status(200).json({
                message: "Product Deleted!"
            })
        }
        else{
            return res.status(200).json({
                message: "Product does not Exist!"
            })
        }
    }
    catch (err) {
        console.log('Error', err);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}


//update quantity of a product
module.exports.update_quantity = async function(req, res){
    try {
        //find the product with the given id
        let product = await Products.findById(req.params.id);

        //if product exists, update its quantity
        if(product){
            //update the quantity and save it
            product.quantity = req.query.number;
            product.save();
            
            //return the product in json format
            return res.status(200).json({
                product: product,
                message: "Quantity Updated successfully"
            })
        }
        else{
            return res.status(500).json({
                message: "Product does not exist"
            })
        }
    } 
    catch (err) {
        console.log('Error', err);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}