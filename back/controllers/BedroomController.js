const Bedroom = require('../models/Bedroom');

class BedroomController {
    static async Create(req, res) {
        const { capacity, category, numberBeds, kitchen, wifi,
            washer, dryer, hotel, moreInformations } = req.body;

        if (!capacity || !category || !numberBeds || !hotel || !wifi)
            return res.status(400).send({ message: "Mandatory information not provided" });

        const optionalInfo = {
            kitchen: kitchen ?? false,
            washer: washer ?? false,
            dryer: dryer ?? false,
            moreInformations: moreInformations ?? false
        };

        const bedroom = new Bedroom({
            capacity: capacity,
            category: category,
            numberBeds: numberBeds,
            kitchen: kitchen,
            wifi: wifi,
            ...optionalInfo
        });

        try {
            await bedroom.save()
            console.log(bedroom)
            return res.status(201).send({ message: "Bedroom created success" });
        } catch (error) {
            return res.status(500).send({ error: "Failed" });
        };
    }

    static async GetAll(req, res){

    }
}

module.exports = BedroomController;