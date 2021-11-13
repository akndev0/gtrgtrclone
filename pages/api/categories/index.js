import dbConnect from "../../../utils/dbConnect";

import Categories from '../../../models/Categories';


dbConnect();


export default async(req,res)=>{
  const {method} =req;

switch (method){
  case 'GET':
    try {
      const categories =await Categories.find({});

      res.status(200).json(categories)
    }catch(error){
      res.status(400).json({success:false});
    }
    break;
    case 'POST':
      try {ş
        const categories =await Categories.create(req.body);

        res.status(200).json({success:true,data:categories})
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