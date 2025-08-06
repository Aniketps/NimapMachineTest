const productDB = require("../databases/nimapMainDatabase");

exports.getAllProducts = (itemCount)=>{
    return new Promise((resolve, reject)=>{
        productDB.query("select p.productID, p.productName, c.categoryName from products p inner join categories c on p.categoryID=c.categoryID", (err, result)=>{
            if(err){
                reject("Failed to fetch, Please try again later sometime...");
            }else{
                let groupsOfProducts = {};
                let group = [];
                result.forEach((item, index)=>{
                    if(index%itemCount == itemCount-1){
                        group.push(item);
                        groupsOfProducts[(index+1)/itemCount] = group;
                        group = [];
                    }else{
                        group.push(item);
                    }
                });
                if(group.length != 0){
                    groupsOfProducts[Object.keys(groupsOfProducts).length+1] = group;
                }
                resolve(groupsOfProducts);
            }
        });
    }).then((result)=>{
        return { "data" : result}
    }).catch((error)=>{
        return { "error" : error }
    });
}

exports.addProduct = async(name, categoryID)=>{
    return new Promise((resolve, reject)=>{
        productDB.query("insert into products values('0', ?, ?)", [name, categoryID], (err, result)=>{
            if(err){
                if(err.code == "ER_PARSE_ERROR"){
                    reject("Problem with database query");
                }else if(err.code == "ER_TRUNCATED_WRONG_VALUE_FOR_FIELD"){
                    reject("Category ID must be integer");
                }else if(err.code == "ER_NO_REFERENCED_ROW_2"){
                    reject("Category does not exists");
                }else if(err.code == "ER_DUP_ENTRY"){
                    reject(name+" already exists");
                }else{
                    reject(err.sqlMessage);
                }
            }else{
                if(result.affectedRows>0){
                    resolve("New Product Added");
                }else{
                    reject("Unknown Error, Please contact to developer...");
                }
            }
        });
    }).then((result)=>{
        return { "message" : result}
    }).catch((error)=>{
        return { "error" : error }
    });
}

exports.getProductByID = (id)=>{
    return new Promise((resolve, reject)=>{
        productDB.query("select p.productID, p.productName, c.categoryName from products p inner join categories c on p.categoryID=c.categoryID where p.productID=?", [id], (err, result)=>{
            if(err){
                reject("Failed get product, Please try again later sometime...");
            }else{
                resolve(result);
            }
        });
    }).then((result)=>{
        return { "data" : result}
    }).catch((error)=>{
        return { "error" : error }
    });
}

exports.getProductsByName = (name)=>{
    return new Promise((resolve, reject)=>{
        let Name = `%${name}%`;
        productDB.query("select p.productID, p.productName, c.categoryName from products p inner join categories c on p.categoryID=c.categoryID where p.productName like ?", [Name], (err, result)=>{
            if(err){
                reject("Failed get Products, Please try again later sometime...");
            }else{
                let groupsOfProducts = {};
                let group = [];
                result.forEach((item, index)=>{
                    if(index%10 == 10-1){
                        group.push(item);
                        groupsOfProducts[(index+1)/10] = group;
                        group = [];
                    }else{
                        group.push(item);
                    }
                });
                if(group.length != 0){
                    groupsOfProducts[Object.keys(groupsOfProducts).length+1] = group;
                }
                resolve(groupsOfProducts);
            }
        });
    }).then((result)=>{
        return { "data" : result}
    }).catch((error)=>{
        return { "error" : error }
    });
}

exports.updateProductByID = (id, name, categoryID)=>{
    return new Promise((resolve, reject)=>{
        productDB.query("update products set productName = ?, categoryID = ? where productID = ?", [name, categoryID, id], (err, result)=>{
            if(err){
                if(err.code == "ER_PARSE_ERROR"){
                    reject("Problem with database query");
                }else if(err.code == "ER_TRUNCATED_WRONG_VALUE_FOR_FIELD"){
                    reject("Category ID must be integer");
                }else if(err.code == "ER_NO_REFERENCED_ROW_2"){
                    reject("Category does not exists");
                }else{
                    reject(err.sqlMessage);
                }
            }else{
                if(result.affectedRows>0){
                    resolve("Successfully updated");
                }else{
                    reject("Product does not exists");
                }
            }
        });
    }).then((result)=>{
        return { "message" : result}
    }).catch((error)=>{
        return { "error" : error }
    });
}

exports.deleteProductByID = (id)=>{
    return new Promise((resolve, reject)=>{
        productDB.query("delete from products where productID = ?", [id], (err, result)=>{
            if(err){
                reject(err.sqlMessage);
            }else{
                if(result.affectedRows>0){
                    resolve("Successfully deleted");
                }else{
                    reject("Product does not exists");
                }
            }
        });
    }).then((result)=>{
        return { "message" : result}
    }).catch((error)=>{
        return { "error" : error }
    });
}