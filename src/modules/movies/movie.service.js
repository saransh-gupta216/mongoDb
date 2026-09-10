import mongoose from "mongoose"

export const createMovie =async (data) => { 
    const movie =await mongoose.connection.db.collection("movies").insertOne(data)

    return movie;
    
}// change
// {}change