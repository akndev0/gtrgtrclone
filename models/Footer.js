const mongoose=require('mongoose');


const FooterSchema =new mongoose.Schema({
    title:{
      type:String,
      required:[true,'Please add a img'],
      

    },

    subTitle:    
    [{
      
      title:{type:String,required:true}
 
    }]




})


module.exports=mongoose.models.Footer||mongoose.model('Footer'
,FooterSchema);