const express=require('express')
const app=express()
const router=require('./routes/product')
const mongoose=require('mongoose')

app.use(express.urlencoded({extended:false}))
app.use(express.json())

//connecting  mongoDB 
mongoose.connect('mongodb+srv://abbashasmi:5WZyJGyvGAxDJamx@cluster0.ai7mzh6.mongodb.net/?retryWrites=true&w=majority')


app.use('/',router)

//listening on port 8000
app.listen(process.env.PORT || 8000,function(){
    console.log('Server is running on port 8000')
})

