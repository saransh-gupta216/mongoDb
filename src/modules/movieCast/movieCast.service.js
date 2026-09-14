import mongoose, { Types } from "mongoose";


export const createMovieCast = async (data) => {
    const movieCast = await mongoose.connection.db.collection("movieCast").insertOne({
        ...data,
        movieId: new Types.ObjectId(data.movieId),
        actorId: new Types.ObjectId(data.actorId)
    })
    return movieCast;

}
export const getMovieCaste = async () => {
    const movieCaste = await mongoose.connection.db.collection("movieCast").find({}).toArray();
    return movieCaste;
}

export const updateMovieCaste = async (id,data)=>{
    const movieCaste = await mongoose.connection.db.collection("movieCast").findOneAndUpdate({
            _id:new  mongoose.Types.ObjectId(id)
        }, {
            $set: {
                castName: data.castName
            }
        })
    
        return movieCaste;

}

export const deleteMovieCaste = async(id)=>{
    const movieCaste = await mongoose.connection.db.collection("movieCast").deleteOne({
            _id:new mongoose.Types.ObjectId(id)
        })
        return movieCaste;
}

