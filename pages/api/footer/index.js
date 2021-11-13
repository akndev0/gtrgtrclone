import dbConnect from "../../../utils/dbConnect";

import Footer from '../../../models/Footer';


dbConnect();


export default async(req,res)=>{
  const {method} =req;

switch (method){
  case 'GET':
    try {
      const footer =await Footer.find({});

      res.status(200).json(footer)
    }catch(error){
      res.status(400).json({success:false});
    }
    break;
    case 'POST':
      try {
        const footer =await Footer.create(req.body);

        res.status(200).json({success:true,data:footer})
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