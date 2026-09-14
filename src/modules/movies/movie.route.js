import express from "express"
import { validateCreateMovie } from "./movie.middleware.js";
import { addMovieController, deleteMovieController, getMovieController, updateMovieController } from "./movie.controller.js";
export const movieRouter = express.Router();
movieRouter.post("/",validateCreateMovie,addMovieController)

movieRouter.get("/", getMovieController)

movieRouter.put("/:id",updateMovieController)

movieRouter.delete("/:id",deleteMovieController)

