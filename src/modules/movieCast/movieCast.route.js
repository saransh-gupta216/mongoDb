import express from "express"
import { createMovieCasteController, deleteMovieCasteController, getMovieCasteController, updateMovieCasteController } from "./movieCaste.controller.js";
import { validateCreateMovieCast } from "./movieCaste.middleware.js";
export const movieCasteRouter = express.Router();

movieCasteRouter.post("/",validateCreateMovieCast,createMovieCasteController)

movieCasteRouter.get("/",getMovieCasteController)

movieCasteRouter.put("/:id",updateMovieCasteController)

movieCasteRouter.delete("/:id",deleteMovieCasteController)