const mongoose=require('mongoose');


const RestaurantsSchema =new mongoose.Schema({
  Img:{
    type:String,
    required:[true,'Please add a img'],
   },
  Title:{
    type:String,
    required:true
  },
  DeliveryTime:{
    type:String,
    required:true
  },
  Rate:{
    type:Number,
    required:true
  },
  RateCount:{
    type:String,
    required:true
  },
  DeliveryType:{
    type:String,
    required:true
  },
  MinimumBasketAmount:{
    type:String,
    required:true
  },
  PaymentMethod:{
    type:String,
    required:true
  },
  Cuisines:{
    type:String,
    required:true
  }
})

module.exports=mongoose.models.Restaurants||mongoose.model('Restaurants',RestaurantsSchema);


