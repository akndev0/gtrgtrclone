import dbConnect from "../../../utils/dbConnect";

import Campaigns from "../../../models/Campaigns";



dbConnect();


export default async (req,res)=>{
 
  const {
    query:{id},
    method
  }=req;
   
  switch(method){
    case 'GET':
    try {
      const campaigns =await Campaigns.findById(id);
      if (!campaigns){
        return res.status(400).json({success:false});
      }

      res.status(200).json({success:true,data:campaigns})
    }catch(error){
      res.status(400).json({success:false});
    }
    break;
    case 'PUT':
            try {
                const campaigns = await Campaigns.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true
                });

                if (!campaigns) {
                    return res.status(400).json({ success: false });
                }

                res.status(200).json({ success: true, data: campaigns });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;

      case 'DELETE':
        try {
          const deletedcampaigns =await Campaigns.deleteOne({_id:id});
          if (!deletedcampaigns){
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