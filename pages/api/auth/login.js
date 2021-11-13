import dbConnect from '../../../utils/dbConnect'
import UserModel from '../../../models/UserModel'
import bcrypt from 'bcrypt'
import { createAccessToken, createRefreshToken } from '../../../utils/generateToken'


dbConnect()


export default async(req,res)=>{
  const {method} =req;

switch (method){
  
    case 'POST':
      try {

      
        const { phonenumber } = req.body

        const user = await UserModel.findOne({ phonenumber })
        if(!user) return res.status(400).json({err: 'This user does not exist.'})

     
        const access_token = createAccessToken({id: user._id})
        const refresh_token = createRefreshToken({id: user._id})
        
        res.json({
            msg: "Login Success!",
            refresh_token,
            access_token,
            user: {
                name: user.name,
                email: user.email,
                phoneNumber : user.phoneNumber,
                role: user.role,
                newsletter:user.newsletter,
                avatar: user.avatar,
                root: user.root
            }
        })
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