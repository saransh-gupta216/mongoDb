export const validateCreateMovie=(req,res,next)=>{
    const {name, publishDate, rating, no_of_tickets}=req.body
    
    if(name&&publishDate&&rating&&no_of_tickets){
        next()
    }
    else{
        res.status(400).json({
            status:"ERROR",
            message:"All fields are required"
        })
    }
}