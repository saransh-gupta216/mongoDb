export const validateCreateMovie=(req,res,next)=>{
    const {name, publishDate, rating}=req.body
    if(name&&publishDate&&rating){
        next()
    }
    else{
        res.status(400).json({
            status:"ERROR",
            message:"All fields are required"
        })
    }
}