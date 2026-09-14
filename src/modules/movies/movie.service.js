import mongoose from "mongoose"

export const createMovie = async (data) => {
    const movie = await mongoose.connection.db.collection("movies").insertOne(data)
    return movie;
}

export const getMovie = async () => {
    const movie = await mongoose.connection.db.collection("movies").find({}).toArray();
    return movie;
}

export const updateMovie = async (id, data) => {
    const movie = await mongoose.connection.db.collection("movies").updateOne({
        _id: new mongoose.Types.ObjectId(id),
    }, {
        $set: {
            name: data.name
        },
        $inc:{
            no_of_tickets: -Number(data.no_of_tickets)
        }
    })

    return movie;
}

export const deleteMovie = async (id) => {
    const movie = await mongoose.connection.db.collection("movies").deleteOne({
        _id: new mongoose.Types.ObjectId(id)
    })
    return movie;
}


