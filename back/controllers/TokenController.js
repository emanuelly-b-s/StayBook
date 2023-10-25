const Token = require('../models/Token');
const User = require('../models/User');
var crypto = require('crypto');
var nodemailer = require('nodemailer');
const Token = require('../models/Token');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const tokenValidationTimer = 300000;

class TokenController{
    static async CreateToken(req, res){
        const secret = process.env.SECRET;

        const { jwt } = req.body;

        if(!jwt) 
            return res.status(400)
                .send({ message: "Jwt not provided" })
        
        var user = jwt.verify(jwt, secret);

        var tokenCode = Math.floor(Math.random() * (max - min + 1)) + min;
        // send email
        var safeCode = await bcrypt.hash(tokenCode, 12)

        const token = new Token({
            code: safeCode,
            expires: Date.now() + tokenValidationTimer,
            user: user.id 
        });

        try {
            await token.save();
            return res.status(201).send({ message: "Token created successfully" });
        } catch (error) {
            return res.status(500).send({ message: "Something failed" })
        }
    }
    
    static async CompareToken(req, res){
        const secret = process.env.SECRET;
        const { code, jwt } = req.body;

        if(!code || !jwt) 
            return res.status(400)
                .send({ message: "Code or jwt not provided" })

        var user = jwt.verify(jwt, secret);

        try {
            if (await Token.findById(user.id).code == await bcrypt.hash(code, 12))
            {
                await User.findByIdAndUpdate(user.id, { validated: true });
                await Token.deleteMany({ "user": user.id });
                return res.status(200)
                    .send({ message: "User validated successfully" })
            }
            return res.status(400)
                .send({ message: "Invalid code" })
        } catch (error) {
            res.status(500)
                .send({ message: error });
        }
    } 
}

module.exports = TokenController;