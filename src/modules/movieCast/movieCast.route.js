import express from "express"
import { createMovieCasteController, deleteMovieCasteController, getMovieCasteController, updateMovieCasteController } from "./movieCaste.controller.js";
export const movieCasteRouter = express.Router();

movieCasteRouter.post("/",createMovieCasteController)

movieCasteRouter.get("/",getMovieCasteController)

movieCasteRouter.put("/:id",updateMovieCasteController)

movieCasteRouter.delete("/:id",deleteMovieCasteController)