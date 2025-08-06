const categoryModel = require("../models/categoryModel.js");

exports.getAllCategories = async(req, res)=>{
    let response = await categoryModel.getAllCategories(10);
    if("error" in response){
        res.status(400).json({ 
            "message" : "Failed to Fetch",
            "error" : response.error
        });
    }else{
        res.status(200).render("pages/categories.ejs", { 
            "message" : "Fetched Successfully", 
            "data" : response.data,
            "paginations" : Object.keys(response.data).length,
            "isFound" : Object.keys(response.data).length>0
        });
    }
}

exports.viewAllCategories = async(req, res)=>{
    let response = await categoryModel.getAllCategories(10);
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

exports.addCategory = async(req, res)=>{
    let name = req.body.name;
    let response = await categoryModel.addCategory(name);
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

exports.getCategoryByID = async(req, res)=>{
    let id = req.params.id;
    let response = await categoryModel.getCategoryByID(id);
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

exports.getCategoriesByName = async(req, res)=>{
    let name = req.params.name;
    let response = await categoryModel.getCategoriesByName(name);
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

exports.updateCategoryByID = async(req, res)=>{
    let id = req.params.id;
    let name = req.body.name;
    let response = await categoryModel.updateCategoryByID(id, name);
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

exports.deleteCategoryByID = async(req, res)=>{
    let id = req.params.id;
    let response = await categoryModel.deleteCategoryByID(id);
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