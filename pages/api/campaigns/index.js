import dbConnect from "../../../utils/dbConnect";

import Campaigns from '../../../models/Campaigns';


dbConnect();


export default async(req,res)=>{
  const {method} =req;

switch (method){
  case 'GET':
    try {
      const campaigns =await Campaigns.find({});

      res.status(200).json(campaigns)
    }catch(error){
      res.status(400).json({success:false});
    }
    break;
    case 'POST':
      try {
        const campaigns =await Campaigns.create(req.body);

        res.status(200).json({success:true,data:campaigns})
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