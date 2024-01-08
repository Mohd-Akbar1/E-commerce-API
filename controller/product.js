const Product=require('../model/model')
const mongoose=require('mongoose')

//controller to display all data in db
async function GetAllProducts(req,res){
    try {
        const product=await Product.find({})
        res.json(product)
        if(!product){
            res.json('List is Empty')
        }
    } catch (error) {
        console.log('error:',error)
        
    }
}
//controller to delete particular provide id
async function DeleteProduct(req,res){
    const {id:productId}=req.params;
    const product=await  Product.findByIdAndDelete({_id:productId})
    if(!product){
        //if given id does'nt exixt
        return res.status(404).json({message:'Id not found'})
    }
    return res.json({message:`Successfully deleted ${productId}`})
    
} 
//controller to create products in db
async function Createproducts(req,res){
    const {name,quantity}=req.body;
       const product=await Product.create({name,quantity})
       res.json({message:`Successfully created ${name}`})
 }

 //updating quantity in exixting details
async function UpdateProducts(req,res){
    console.log(req.params)
    try {
       const {quantity}=req.params;
       const id =new mongoose.Types.ObjectId(req.params.id.trim());
        
        
        
      
     const product = await Product.findByIdAndUpdate({_id:id},{$set:{ quantity: quantity }}, { new: true } );
   console.log(product)
    
    res.json({message:'Successfully Updated'})
    } catch (error) {
        console.log(error)  
    }
}

module.exports={
    GetAllProducts,
    DeleteProduct,
    Createproducts,
    UpdateProducts
}