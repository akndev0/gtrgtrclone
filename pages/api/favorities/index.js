import dbConnect from "../../../utils/dbConnect";

import Favorities from '../../../models/Favorities';


dbConnect();


export default async(req,res)=>{
  const {method} =req;

switch (method){
  case 'GET':
    try {
      const favorities =await Favorities.find({});

      res.status(200).json(favorities)
    }catch(error){
      res.status(400).json({success:false});
    }
    break;
    case 'POST':
      try {
        const favorities =await Favorities.create(req.body);

        res.status(200).json({success:true,data:favorities})
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