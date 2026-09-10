import connectDB from "./modules/utils/db_connect.js";
import {movieRouter} from "./modules/movies/movie.route.js"
import express from "express"

const app = express()
app.use(express.json())
app.use("/movies",movieRouter)
connectDB()
app.listen(3000,()=>{
    console.log("Server up and listening to port 3000");
    
})