const mongoose=require('mongoose');


const CampaignsSchema =new mongoose.Schema({
    img:{
      type:String,
      required:[true,'Please add a img'],
      
     
      

    },

    title:{

      type:String,
      required:true
    }




})


module.exports=mongoose.models.Campaigns||mongoose.model('Campaigns'
,CampaignsSchema);