import dbConnect from "../../../utils/dbConnect";

import Products  from "../../../models/Products";

const mongoose = require("mongoose");

dbConnect();


export default async (req,res)=>{
 
  const {
    query:{id},
    method
  }=req;
   
  switch(method){
    case 'GET':
    try {
   
    
  
    const product =await Products.aggregate([ 
      { "$unwind" : '$items'},
      { "$unwind" : '$items.item'},
      { "$match" :   { "items.item._id" : new mongoose.Types.ObjectId(id.toString()) }} ,
     ]);

      
      const productData=product[0].items.item;
      if (!productData){
        return res.status(400).json({success:false});
      }

      res.status(200).json({productData})
    }catch(error){
      res.status(400).json({success:false});
    }
    break;
    case 'PUT':
            try {
                const product = await Products.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true
                });

                if (!category) {
                    return res.status(400).json({ success: false });
                }

                res.status(200).json({ success: true, data: product });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;

      case 'DELETE':
        try {
          const deletedproduct=await Products.deleteOne({_id:id});
          if (!deletedproduct){
            return res.status(400).json({success:false});
          }
    
          res.status(200).json({success:true,data:{}})
        }catch(error){
          res.status(400).json({success:false});
        }
        break;

      default:
        break;

  }
}