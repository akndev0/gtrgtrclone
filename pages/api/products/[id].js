import dbConnect from "../../../utils/dbConnect";

import Products from "../../../models/Products";



dbConnect();


export default async (req,res)=>{
 
  const {
    query:{id},
    method
  }=req;
   
  switch(method){
    case 'GET':
    try {
      const products =await Products.find({category:id});
      if (!products){
        return res.status(400).json({success:false});
      }

      res.status(200).json({success:true,data:products})
    }catch(error){
      res.status(400).json({success:false});
    }
    break;
    case 'PUT':
            try {
                const products = await Products.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true
                });

                if (!category) {
                    return res.status(400).json({ success: false });
                }

                res.status(200).json({ success: true, data: products });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;

      case 'DELETE':
        try {
          const deletedproducts=await Products.deleteOne({_id:id});
          if (!deletedproducts){
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