import { User } from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
export const signup= async (req,res)=>{
    const {email, password, name }= req.body;
    try{
        if(!email || !password || !name){
            throw new Error('Please fill in all fields');
    }
    const userAlreadyExits = await User.findOne({email});
    if(userAlreadyExits){
        return res.status(400).json({success:false, message: 'User already exists'});
    }
    const hashedPassword = await bcryptjs.hash(password,10);
    const user = new User({
        email,
        password: hashedPassword,
        
    })

    
  //  res.send("signup route");
}
catch(error)
{
    res.status(400).json({success:false, message: error.message});
}

export const login= async (req,res)=>{
    res.send("login route");
}
export const logout = async(req,res)=>{
    res.send("logout route");
}
