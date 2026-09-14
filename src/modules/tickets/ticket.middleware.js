export const validateBookTicket = (req, res, next) => {
    const { movieId, no_of_tickets, showTime, showDate } = req.body;

    if (movieId && no_of_tickets && showTime && showDate) {
        next();
    } else {
        res.status(400).json({
            status: "ERROR",
            message: "All fields are required"
        });
    }
};