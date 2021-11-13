import dbConnect from "../../../utils/dbConnect";

import HomeCards from "../../../models/HomeCards";



dbConnect();


export default async (req,res)=>{
 
  const {
    query:{id},
    method
  }=req;
   
  switch(method){
    case 'GET':
    try {
      const homeCards =await HomeCards.findById(id);
      if (!homeCards){
        return res.status(400).json({success:false});
      }

      res.status(200).json({success:true,data:homeCards})
    }catch(error){
      res.status(400).json({success:false});
    }
    break;
    case 'PUT':
            try {
                const homeCards = await HomeCards.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true
                });

                if (!homeCards) {
                    return res.status(400).json({ success: false });
                }

                res.status(200).json({ success: true, data: homeCards });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;

      case 'DELETE':
        try {
          const deletedhomeCards =await HomeCards.deleteOne({_id:id});
          if (!deletedhomeCards){
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