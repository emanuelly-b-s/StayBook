const Hotel = require('../models/Hotel');
const Room = require('../models/Room');

class RoomController {
    static async Create(req, res) {
        const { capacity, doubleBed, singleBed, price, 
            rate, hotel, description, category, 
            image, available } = req.body;

        if (!capacity || !doubleBed || !singleBed || !price || !rate || 
            !hotel || !description || !image || !available || !category)
            return res.status(400).send({ message: "Mandatory information not provided" });

        const room = new Room({
            capacity: capacity,
            doubleBed: doubleBed,
            singleBed: singleBed,
            price: price,
            rate: rate,
            hotel: hotel,
            description: description,
            image: image,
            available: available
        });

        try {
            await room.save()
            await Hotel.findByIdAndUpdate(hotel, { $push: { rooms: room.id } })
            return res.status(201).send({ message: "Room created successfully" });
        } catch (error) {
            return res.status(500).send({ error: "Failed" });
        };
    }
}

module.exports = RoomController;