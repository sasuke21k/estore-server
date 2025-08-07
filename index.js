const express  = require('express');
const productCategories = require('./routes/productCategories');
const cors=require('cors');
const app= express();
const PORT =5001;

app.use("/productcategories",productCategories);
const server = app.listen(PORT, () => {
    console.log('Server is running on port - 5001');
});