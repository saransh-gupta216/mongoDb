import { createMovie } from "./movie.service.js"

export const addMovieController = async(req,res)=>{
    const data = req.body
    const movie = await createMovie(data)
    res.json({
        status:"OK",
        message:"Movie created successfully",
        movie:movie
    })

}