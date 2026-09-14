import { createMovieCast, deleteMovieCaste, getMovieCaste, updateMovieCaste } from "./movieCast.service.js"


export const createMovieCasteController = async(req,res)=>{
    const data = req.body 
    const movie = await createMovieCast(data)
    res.json({
        status:"OK",
        message : "Movie Caste Created Successfully"
    })
}

export const getMovieCasteController = async (req,res)=>{
    const movieCaste = await getMovieCaste();
    res.json({
        status:"OK",
        message:"Movie Caste Feteched Successfully",
        movieCaste
    })
}

export const updateMovieCasteController = async(req,res)=>{
const { id } = req.params;
  const data = req.body;
  const movie = await updateMovieCaste(id, data);
  res.json({
    status:"OK",
    message:"Movie Updated Successfully",
    
  })
}

export const deleteMovieCasteController = async(req,res)=>{
      const {id} = req.params;
        const moviecaste = await deleteMovieCaste(id);
        res.json({
            status: "OK",
            message: "Movie Deleted Successfully",
            moviecaste
            
        })
    }

