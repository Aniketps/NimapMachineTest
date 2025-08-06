exports.addCategory = (req, res, next)=>{
    if(!req.body) return res.status(400).json({ "message" : "Category name is required", "requestStauts" : "Failed" });
    if(!req.body.name) return res.status(400).json({ "message" : "Category name is required", "requestStauts" : "Failed" });
    next();
}

exports.updateCategoryByID = (req, res, next)=>{
    if(!req.body || !req.body.name) return res.status(400).json({ "message" : "Category name is required", "requestStauts" : "Failed" });
    next();
}
