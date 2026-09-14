import mongoose from "mongoose";

export const createActorService = async (data) => {
    const actor = await mongoose.connection.db.collection("actors").insertOne(data)
    return actor; ;
}

export const getActor = async () => {
    const actor = await mongoose.connection.db.collection("actors").find({}).toArray();
    return actor;
}