const mongoose=require('mongoose');


const CategorySchema =new mongoose.Schema({
  img:{
    type:String,
    required:[true,'Please add a img'],
   },

  price:{
    type:String,
    required:true
  },
  title:{
    type:String,
    required:true
  },
  quantity:{
    type:String,
    required:true
  },
  category:{
    type:String,
    required:true
  }




})


module.exports=mongoose.models.Category||mongoose.model('Category'
,CategorySchema);