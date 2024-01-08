const express=require('express')
const router=express.Router()

//importing controllers
const {GetAllProducts,Createproducts,DeleteProduct,UpdateProducts}=require('../controller/product')

//get request to display whole List of products
router.get('/',GetAllProducts)
router.get('/products',GetAllProducts)

//post request for creating products
router.post('/products/create',Createproducts)

//delete request for particular given id
router.delete('/products/:id',DeleteProduct)

//post request to update in quantity
router.post('/products/:id/update_quantity/:quantity',UpdateProducts)







module.exports=router;