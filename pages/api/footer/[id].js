import dbConnect from "../../../utils/dbConnect";

import Footer from "../../../models/Footer";



dbConnect();


export default async (req,res)=>{
 
  const {
    query:{id},
    method
  }=req;
   
  switch(method){
    case 'GET':
    try {
      const footer =await Footer.findById(id);
      if (!footer){
        return res.status(400).json({success:false});
      }

      res.status(200).json({success:true,data:footer})
    }catch(error){
      res.status(400).json({success:false});
    }
    break;
    case 'PUT':
            try {
                const footer = await Footer.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true
                });

                if (!footer) {
                    return res.status(400).json({ success: false });
                }

                res.status(200).json({ success: true, data: footer });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;

      case 'DELETE':
        try {
          const deletedfooter =await Footer.deleteOne({_id:id});
          if (!deletedfooter){
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