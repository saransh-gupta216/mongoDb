import express from "express";
import { addActorController, getActorController } from "./actor.controller.js";
import { validateCreateActor } from "./actor.middleware.js";
export const actorRoute = express.Router();



actorRoute.post("/",validateCreateActor,addActorController)

actorRoute.get("/", getActorController)
