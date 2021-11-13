import dbConnect from "../../../utils/dbConnect";

import Favorities from "../../../models/Favorities";



dbConnect();


export default async (req,res)=>{
 
  const {
    query:{id},
    method
  }=req;
   
  switch(method){
    case 'GET':
    try {
      const favorities =await Favorities.findById(id);
      if (!favorities){
        return res.status(400).json({success:false});
      }

      res.status(200).json({success:true,data:favorities})
    }catch(error){
      res.status(400).json({success:false});
    }
    break;
    case 'PUT':
            try {
                const favorities = await Favorities.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true
                });

                if (!favorities) {
                    return res.status(400).json({ success: false });
                }

                res.status(200).json({ success: true, data: favorities });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;

      case 'DELETE':
        try {
          const deletedfavorities =await Favorities.deleteOne({_id:id});
          if (!deletedfavorities){
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