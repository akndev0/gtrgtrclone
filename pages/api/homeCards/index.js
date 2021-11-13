import dbConnect from "../../../utils/dbConnect";

import HomeCards from '../../../models/HomeCards';


dbConnect();


export default async(req,res)=>{
  const {method} =req;

switch (method){
  case 'GET':
    try {
      const homeCards =await HomeCards.find({});

      res.status(200).json(homeCards)
    }catch(error){
      res.status(400).json({success:false});
    }
    break;
    case 'POST':
      try {
        const homeCards =await HomeCards.create(req.body);

        res.status(200).json({success:true,data:homeCards})
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