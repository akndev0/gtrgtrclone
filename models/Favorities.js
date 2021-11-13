const mongoose=require('mongoose');


const FavoritiesSchema =new mongoose.Schema({
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
    }

})


module.exports=mongoose.models.Favorities||mongoose.model('Favorities'
,FavoritiesSchema);