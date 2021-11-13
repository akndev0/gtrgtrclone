const mongoose=require('mongoose');


const ItemSchema =new mongoose.Schema({
 
  img:{
    type:String,
    required:[true,'Please add a img'],
   },  
   title:{
    type:String,
    required:true
  },
  price:{
    type:String,
    required:true
  },
  quantity:{
    type:String,
    required:true
  },

})

const ItemsSchema =new mongoose.Schema({
  subtitle:{
    type:String,
    required:true
   },  
  item:[ItemSchema],

})

const ProductsSchema =new mongoose.Schema({
    category:{
      type:String,
      required:true
    },
    items:[ItemsSchema],
   })


module.exports=mongoose.models.Products||mongoose.model('Products',ProductsSchema);