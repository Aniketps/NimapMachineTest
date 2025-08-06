const productModel = require("../models/productModel.js");

exports.getAllProducts = async(req, res)=>{
    let response = await productModel.getAllProducts(10);
    if("error" in response){
        res.status(400).json({ 
            "message" : "Failed to Fetch",
            "error" : response.error
        });
    }else{
        res.status(200).render("pages/products.ejs", { 
            "message" : "Fetched Successfully", 
            "data" : response.data,
            "paginations" : Object.keys(response.data).length,
            "isFound" : Object.keys(response.data).length>0
        });
    }
}

exports.viewAllProducts = async(req, res)=>{
    let response = await productModel.getAllProducts(10);
    if("error" in response){
        res.status(400).json({ 
            "message" : "Failed to Fetch",
            "error" : response.error
        });
    }else{
        res.status(200).json({ 
            "message" : "Fetched Successfully", 
            "data" : response.data,
            "paginations" : Object.keys(response.data).length,
            "isFound" : Object.keys(response.data).length>0
        });
    }
}

exports.addProduct = async(req, res)=>{
    let name = req.body.name;
    let categoryID = req.body.categoryID;
    let response = await productModel.addProduct(name, categoryID);
    if("error" in response){
        res.status(400).json({ 
            "message" : "Failed to Create",
            "error" : response.error
        });
    }else{
        res.status(200).json({ 
            "message" : response.message, 
        });
    }
}

exports.getProductByID = async(req, res)=>{
    let id = req.params.id;
    let response = await productModel.getProductByID(id);
    if("error" in response){
        res.status(400).json({
            "message" : "Failed to Fetch",
            "error" : response.error
        });
    }else{
        res.status(200).json({ 
            "message" : "Fetched Successfully", 
            "data" : response.data,
            "paginations" : Object.keys(response.data).length,
            "isFound" : Object.keys(response.data).length>0
        });
    }
}

exports.getProductsByName = async(req, res)=>{
    let name = req.params.name;
    let response = await productModel.getProductsByName(name);
    if("error" in response){
        res.status(400).json({ 
            "message" : "Failed to Fetch",
            "error" : response.error
        });
    }else{
        res.status(200).json({ 
            "message" : "Fetched Successfully", 
            "data" : response.data,
            "paginations" : Object.keys(response.data).length,
            "isFound" : Object.keys(response.data).length>0
        });
    }
}

exports.updateProductByID = async(req, res)=>{
    let id = req.params.id;
    let name = req.body.name;
    let categoryID = req.body.categoryID;
    let response = await productModel.updateProductByID(id, name, categoryID);
    if("error" in response){
        res.status(400).json({ 
            "message" : "Failed to Update",
            "error" : response.error
        });
    }else{
        res.status(200).json({ 
            "message" : response.message, 
        });
    }
}

exports.deleteProductByID = async(req, res)=>{
    let id = req.params.id;
    let response = await productModel.deleteProductByID(id);
    if("error" in response){
        res.status(400).json({ 
            "message" : "Failed to Delete",
            "error" : response.error
        });
    }else{
        res.status(200).json({ 
            "message" : response.message, 
        });
    }
}