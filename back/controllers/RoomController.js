const Hotel = require('../models/Hotel');
const Room = require('../models/Room');

class RoomController {
    static async Create(req, res) {
        const { capacity, doubleBed, singleBed, price, 
            rate, hotel, description, category, 
            image, available, title  } = req.body;

        if (!capacity || !doubleBed || !singleBed || !price || !rate || 
            !hotel || !description || !image || !available || !category || !title)
            return res.status(400).send({ message: "Mandatory information not provided" });

        const roomCode = await Room.count() + 1;

        const room = new Room({
            capacity: capacity,
            code: roomCode, 
            doubleBed: doubleBed,
            singleBed: singleBed,
            title: title,
            price: price,
            rate: rate,
            hotel: hotel,
            description: description,
            image: image,
            available: available
        });

        try {
            await room.save()
            await Hotel.findByIdAndUpdate(hotel, { $push: { rooms: room } })
            return res.status(201).send({ message: "Room created successfully" });
        } catch (error) {
            return res.status(500).send({ error: "Failed" });
        };
    }

    static async GetAll(req, res) {
        try {
            var rooms = await Room.find();
            return res.status(200).send(rooms);
        } catch (error) {
            return res.status(500).send({ error: "Failed" });
        }
    }

    static async GetRange(req, res) {
        const { start, end } = req.body;
        
        if (!start || !end)
            return res.status(400).send({ message: "Mandatory information not provided" });

        try {
            var allRooms = await Room.find();
            var filteredRoomss = allRooms.slice(start, end);
            return res.status(200).send(filteredRoomss);
        } catch (error) {
            return res.status(500).send({ error: "Failed" });
        }
    }

    static async GetRoom(req, res) {
        const { code } = req.body;
        
        if (!code)
            return res.status(400).send({ message: "Mandatory information not provided" });

        try {
            var room = await Room.findOne({ 'code': code });
            return res.status(200).send(room);
        } catch (error) {
            return res.status(500).send({ error: "Failed" });
        }
    }
}

module.exports = RoomController;