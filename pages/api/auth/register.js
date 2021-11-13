import dbConnect from "../../../utils/dbConnect";

import UserModel from '../../../models/UserModel';

import valid from '../../../utils/valid'
import bcrypt from 'bcrypt'

dbConnect();


export default async(req,res)=>{
  const {method} =req;

switch (method){
  
    case 'POST':
      try {

        const { name, email, password, phoneNumber,newsletter } = req.body

        const errMsg = valid(name, email, password, phoneNumber,newsletter)
        if(errMsg) return res.status(400).json({err: errMsg})

        const userEmailCheck = await UserModel.findOne({email})
       
        if(userEmailCheck){
        
         return res.status(400).json({msg: 'This email already exists.'}) 
      
        
          
        }  
        const userPhoneNumberCheck = await UserModel.findOne({ phoneNumber })
       
        if(userPhoneNumberCheck){
         
         return res.status(400).json({msg: 'This phone number already exists.'}) 
        
        
          
        }  

      
       
        const passwordHash = await bcrypt.hash(password, 12)

        const newUser = new UserModel({ 
            name, email, password: passwordHash, phoneNumber,newsletter })
        console.log(newUser)
        await newUser.save()
       
       res.status(200).json({success:true})
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