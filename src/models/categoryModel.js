const categoryDB = require("../databases/nimapMainDatabase");

exports.getAllCategories = (itemCount)=>{
    return new Promise((resolve, reject)=>{
        categoryDB.query("select * from categories", (err, result)=>{
            if(err){
                reject("Failed to fetch, Please try again later sometime...");
            }else{
                let groupsOfCategories = {};
                let group = [];
                result.forEach((item, index)=>{
                    if(index%itemCount == itemCount-1){
                        group.push(item);
                        groupsOfCategories[(index+1)/itemCount] = group;
                        group = [];
                    }else{
                        group.push(item);
                    }
                });
                if(group.length != 0){
                    groupsOfCategories[Object.keys(groupsOfCategories).length+1] = group;
                }
                resolve(groupsOfCategories);
            }
        });
    }).then((result)=>{
        return { "data" : result}
    }).catch((error)=>{
        return { "error" : error }
    });
}

exports.addCategory = async(name)=>{
    return new Promise((resolve, reject)=>{
        categoryDB.query("insert into categories values('0', ?)", [name], (err, result)=>{
            if(err){
                if(err.code == "ER_DUP_ENTRY"){
                    reject(name+" already exists");
                }else{
                    reject(err.sqlMessage);
                }
            }else{
                if(result.affectedRows>0){
                    resolve("New Category Added");
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

exports.getCategoryByID = (id)=>{
    return new Promise((resolve, reject)=>{
        categoryDB.query("select * from categories where categoryID=?", [id], (err, result)=>{
            if(err){
                reject("Failed get category, Please try again later sometime...");
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

exports.getCategoriesByName = (name)=>{
    return new Promise((resolve, reject)=>{
        let Name = `%${name}%`;
        categoryDB.query("select * from categories where categoryName like ?", [Name], (err, result)=>{
            if(err){
                reject("Failed get Categories, Please try again later sometime...");
            }else{
                let groupsOfCategories = {};
                let group = [];
                result.forEach((item, index)=>{
                    if(index%10 == 10-1){
                        group.push(item);
                        groupsOfCategories[(index+1)/10] = group;
                        group = [];
                    }else{
                        group.push(item);
                    }
                });
                if(group.length != 0){
                    groupsOfCategories[Object.keys(groupsOfCategories).length+1] = group;
                }
                resolve(groupsOfCategories);
            }
        });
    }).then((result)=>{
        return { "data" : result}
    }).catch((error)=>{
        return { "error" : error }
    });
}

exports.updateCategoryByID = (id, name)=>{
    return new Promise((resolve, reject)=>{
        categoryDB.query("update categories set categoryName = ? where categoryID = ?", [name, id], (err, result)=>{
            if(err){
                if(err.code == "ER_DUP_ENTRY"){
                    reject(name+" already exists");
                }else{
                    reject(err.sqlMessage);
                }
            }else{
                if(result.affectedRows>0){
                    resolve("Successfully updated");
                }else{
                    reject("Category does not exists");
                }
            }
        });
    }).then((result)=>{
        return { "message" : result}
    }).catch((error)=>{
        return { "error" : error }
    });
}

exports.deleteCategoryByID = (id)=>{
    return new Promise((resolve, reject)=>{
        categoryDB.query("delete from categories where categoryID = ?", [id], (err, result)=>{
            if(err){
                reject(err.sqlMessage);
            }else{
                if(result.affectedRows>0){
                    resolve("Successfully deleted");
                }else{
                    reject("Category does not exists");
                }
            }
        });
    }).then((result)=>{
        return { "message" : result}
    }).catch((error)=>{
        return { "error" : error }
    });
}