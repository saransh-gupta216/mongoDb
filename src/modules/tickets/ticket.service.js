import mongoose, { Types } from "mongoose";

export const bookTicketService = async (data) => {
    const no_of_tickets = parseInt(data.no_of_tickets)
    console.log(no_of_tickets);
    const doc = await mongoose.connection.db.collection("tickets").insertOne({
        ...data,
        movieId: new Types.ObjectId(data.movieId),
        no_of_tickets:no_of_tickets,
    });
    
    await mongoose.connection.db.collection("movies").updateOne(
        { _id: new Types.ObjectId(data.movieId) },
        {
            $inc: {
                no_of_tickets: -no_of_tickets
            }
        }
    );

    return doc;
}


export const cancelTickeService = async (id) => {           
    const doc = await mongoose.connection.db.collection("tickets").findOneAndDelete({
        _id: new mongoose.Types.ObjectId(id)
    });

    await mongoose.connection.db.collection("movies").updateOne(
        { _id: new Types.ObjectId(doc.movieId) },
        {
            $inc: {
                no_of_tickets: parseInt(doc.no_of_tickets)
            }
        }
    );

    return doc;
}

