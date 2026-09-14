import { bookTicketService, cancelTickeService } from "./ticket.service.js";

export const bookTicketController = async (req, res) => {
    const data = {
        ...req.body,
        showDate: new Date(req.body.showDate)
    };
    const ticket = await bookTicketService(data);
    res.json({
        status: "OK",
        messsage: "Ticket Booked Succesfully",
        tickets: ticket
    })

}

export const cancelTicketController = async (req, res) => {
    const ticket = await cancelTickeService(req.params.id)
    res.json({
          status: "OK",
        messsage: "Ticket Cancelled Succesfully",
        tickets: ticket
    })
}