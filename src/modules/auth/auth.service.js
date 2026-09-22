import mongoose from "mongoose"

export const register = async(data)=>{
const result = await mongoose.connection.db.collection("users").insertOne(data)
return result;
}


export const login = async(email,password)=>{
    const result = await mongoose.connection.db.collection("users").findOne({email,password})
    return result;
}