export const validateCreateMovieCast=(req,res,next)=>{
    const {movieId,actorId,castName}=req.body
    
    if(movieId&&actorId&&castName){
        next()
    }
    else{
        res.status(400).json({
            status:"ERROR",
            message:"All fields are required"
        })
    }
}