const Room = require('../models/Room');

class BookingController {
    static async Create(req, res) {
        const { startDate, endDate, user, numberChildren, numberAdults, rooms } = req.body;

        if (!startDate || !endDate || !user || !numberChildren || !numberAdults || !rooms)
            return res.status(400).send({ message: "Mandatory information not provided" });

        const booking = new Booking({
            startDate: startDate,
            endDate: endDate,
            user: user,
            numberAdults: numberAdults,
            numberChildren: numberChildren,
            rooms: rooms
        });

        try {
            await Room.updateMany({'code': { $in: rooms }}, { $set: {available: false} })
        } catch (error) {
            return res.status(500).send({ error: "Failed" });
        }   

        try {
            await booking.save()
            return res.status(201).send({ message: "Booking created successfully" });
        } catch (error) {
            return res.status(500).send({ error: "Failed" });
        };
    }

    static async GetUser(req, res) {
        const { jwtUser } = req.body;
        const secret = process.env.SECRET;

        if(!jwtUser) 
            return res.status(400)
                .send({ message: "Jwt not provided" })

        var user = jwt.verify(jwtUser, secret);

        try {
            var bookings = await Booking.find({ "user": user.id });
            return res.status(200).send(bookings);
        } catch (error) {
            return res.status(500).send({ error: "Failed" });
        }
    }
}

module.exports = BookingController;