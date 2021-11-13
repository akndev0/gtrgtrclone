import dbConnect from "../../../utils/dbConnect";

import Categories from "../../../models/Categories";



dbConnect();


export default async (req,res)=>{
 
  const {
    query:{id},
    method
  }=req;
   
  switch(method){
    case 'GET':
    try {
      const categories =await Categories.findById(id);
      if (!categories){
        return res.status(400).json({success:false});
      }

      res.status(200).json({success:true,data:categories})
    }catch(error){
      res.status(400).json({success:false});
    }
    break;
    case 'PUT':
            try {
                const categories = await Categories.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true
                });

                if (!categories) {
                    return res.status(400).json({ success: false });
                }

                res.status(200).json({ success: true, data: categories });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;

      case 'DELETE':
        try {
          const deletedcategories =await Categories.deleteOne({_id:id});
          if (!deletedcategories){
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