import {User} from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { trusted } from "mongoose";
export const register=async(req,res)=>{
    try{
        const {username,email,password,role}=req.body;
        if(!username || !email || !role || !password){
            return res.status(400).json({
                message:"Something is missing",
                success:false
            });

        };
        const user=await User.findOne({email});
        if(user){
            return res.status(400).json({
                message:"Account already exit",
                success:false
            });
        }
        const hashedPassword=await bcrypt.hash(password,10);
        await User.create({
            username,
            email,
            password:hashedPassword,
            role
        });
        return res.status(200).json({
            message:"Account created successfully",
            success:true
        });

    }
    catch(error){
        console.log(error);
    }
}