const Token = require('../models/Token');
require('dotenv').config();

class TokenController{
    static async CreateToken(req, res){
        var tokenCode = crypto.randomBytes(64).toString('hex');

        const token = new Token({
            code: tokenCode,
            expires: Date.now() + 300000,
            user: username 
        });

        try {
            await token.save();
            return res.status(201).send({ message: "Token created successfully" });
        } catch (error) {
            return res.status(500).send({ message: "Something failed" })
        }
    }
    
    static async CompareToken(req, res){
        const { code, jwt } = req.body;

        if(!code || !jwt) 
            return res.status(400)
                .send({ message: "Code or jwt not provided" })

    } 
}

module.exports = TokenController;