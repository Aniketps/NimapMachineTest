exports.addProduct = (req, res, next)=>{
    if(!req.body) return res.status(400).json({ "message" : "Product name and Category ID is required", "error" : "Insuffient Data" });
    if(!req.body.name) return res.status(400).json({ "message" : "Product name is required", "error" : "Insuffient Data" });
    if(!req.body.categoryID) return res.status(400).json({ "message" : "Category ID is required", "error" : "Insuffient Data" });
    next();
}

exports.updateProductByID = (req, res, next)=>{
    if(!req.body) return res.status(400).json({ "message" : "Product name and Category ID is required", "error" : "Insuffient Data" });
    if(!req.body.name) return res.status(400).json({ "message" : "Product name is required", "error" : "Insuffient Data" });
    if(!req.body.categoryID) return res.status(400).json({ "message" : "Category ID is required", "error" : "Insuffient Data" });
    next();
}
