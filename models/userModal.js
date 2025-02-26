import mongoose from "mongoose";


const{model,Schema}=mongoose;

const userschema=schema(
    {
        userName:{
            type:String,
            required:true
        },
        userEmail:{
            type:String,
            required:true
        },
        userPassword:{
            type:String,
            required:true
        },
        userRole:{
            type:String,
            required:true,
            default:user,
            enum:"user, admin"
        },
    }
)