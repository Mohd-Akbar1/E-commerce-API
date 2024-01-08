const mongoose=require('mongoose')

const ProductSchema=new mongoose.Schema({
    name:{type:String},
    quantity:{type:String}


},{timestamps:true})
const Product=new mongoose.model('Product',ProductSchema)
module.exports=Product