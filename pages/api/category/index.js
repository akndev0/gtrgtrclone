import dbConnect from "../../../utils/dbConnect";

import Category from '../../../models/Category';


dbConnect();


export default async(req,res)=>{
  const {method} =req;

switch (method){
  case 'GET':
    try {
      const category =await Category.find({});

      res.status(200).json(category)
    }catch(error){
      res.status(400).json({success:false});
    }
    break;
    case 'POST':
      try {
        const category =await Category.create(req.body);

        res.status(200).json({success:true,data:category})
       }catch(error){
         console.log(error)
        res.status(400).json({success:false});
      }
      break;
    default:  
    res.status(400).json({success:false});
    break;
}
   
  
 
}