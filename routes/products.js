const express  = require('express');
const pool = require('../shared/pool');
const products = express.Router();

products.get("/",(req,res)=>{
   const mainCategoryId = req.query.maincategoryid;
    const subCategoryId = req.query.subcategoryid;

    let query = "select * from products";
    let queryParams = [];

    if(mainCategoryId){
        query=`select products.* from products join categories on  
        products.category_id = categories.id where categories.parent_category_id = ?`;
        queryParams.push(mainCategoryId);
    }else if(subCategoryId){
        query +=" WHERE category_id = ?";
        queryParams.push(subCategoryId);
    }

    pool.query(query,queryParams, (error, products) => {
        if (error) {
            res.status(500).send(error);
        } else {
            res.status(200).send(products);
        }
});
});

products.get("/:id", (req, res) => {
    let id = req.params.id;
    pool.query("select *From products where id= ?", [id], (error, product) => {
        if (error) 
            res.status(500).send(error);
            else res.status(200).send(product);
    });
});

module.exports = products;