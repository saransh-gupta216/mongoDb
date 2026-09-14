import express from "express"
import { validateBookTicket } from "./ticket.middleware.js";
import { bookTicketController, cancelTicketController } from "./ticket.controller.js";
export const ticketRouter = express.Router();

ticketRouter.post("/", validateBookTicket, bookTicketController)
ticketRouter.delete("/:id",cancelTicketController)
