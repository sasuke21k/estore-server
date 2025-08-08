const express  = require('express');
const productCategories = require('./routes/productCategories');
const products = require('./routes/products');
const cors=require('cors');
const app= express();
const PORT =5001;

app.use(cors());
app.use("/productcategories",productCategories);
app.use("/products",products);
const server = app.listen(PORT, () => {
    console.log('Server is running on port - 5001');
});