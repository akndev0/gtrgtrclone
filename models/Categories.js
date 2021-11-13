const mongoose=require('mongoose');


const CategoriesSchema =new mongoose.Schema({
    img:{
      type:String,
      required:[true,'Please add a img'],
      
     
      

    },

    title:{

      type:String,
      required:true
    }




})


module.exports=mongoose.models.Categories||mongoose.model('Categories'
,CategoriesSchema);