const express  = require('express');
const pool = require('../shared/pool');
const products = express.Router();

products.get("/",(req,res)=>{
    pool.query('SELECT * FROM products', (error, products) => {
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