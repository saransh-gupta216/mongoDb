import express from "express"
import { validateCreateMovie } from "./movie.middleware.js";
import { addMovieController } from "./movie.controller.js";
export const movieRouter = express.Router();
movieRouter.post("/",validateCreateMovie,addMovieController)

