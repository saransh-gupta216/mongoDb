import { createMovie, deleteMovie, getMovie, updateMovie } from "./movie.service.js"

export const addMovieController = async(req,res)=>{
    const data = req.body
   
    const movie = await createMovie(data)
    res.json({
        status:"OK",
        message:"Movie created successfully",
        movie:movie
    })

}

export const getMovieController = async (req, res) => {
  const movies = await getMovie();

  res.json({
    status: "OK",
    message: "Movies fetched successfully",
    movies: movies
  });
};

export const updateMovieController = async(req,res)=>{
const { id } = req.params;
  const data = req.body;
  const movie = await updateMovieC(id, data);
  res.json({
    status:"OK",
    message:"Movie Updated Successfully",
    movie : movie
  })

}
export const deleteMovieController = async(req,res)=>{
    const {id} = req.params;
    const movie  = await deleteMovie(id);
    res.json({
        status: "OK",
        message: "Movie Deleted Successfully",
        movie : movie
    })
}