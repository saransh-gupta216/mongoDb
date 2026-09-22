import connectDB from "./modules/utils/db_connect.js";
import {movieRouter} from "./modules/movies/movie.route.js"
import { actorRoute } from "./modules/actors/actor.route.js";
import express from "express"
import { movieCasteRouter } from "./modules/movieCast/movieCast.route.js";
import { ticketRouter } from "./modules/tickets/ticket.route.js";
import cors from "cors"
import { authRouter } from "./modules/auth/auth.route.js";
const app = express()
app.use(express.json())
app.use(cors())

app.use("/movies",movieRouter)
app.use("/actors",actorRoute)
app.use("/moviecaste",movieCasteRouter)
app.use("/tickets", ticketRouter)
app.use("/auth",authRouter)
connectDB()
app.listen(3000,()=>{
    console.log("Server up and listening to port 3000");
    
})