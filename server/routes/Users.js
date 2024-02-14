const express = require("express")
const router = express.Router()
const { Users } = require("../models");
const bcrypt = require("bcrypt");
const {validateToken} = require("../middlewares/AuthMiddleware");
const {sign} = require('jsonwebtoken');


//za hesiranje passowrda
router.post("/register" , async (req, res) =>{
    const {username, password} = req.body;
    bcrypt.hash(password, 10).then(async (hash)=>{
        console.log({body: req.body, hash})
        await Users.create({
            username: username,
            password: hash,
        })
        res.json("USPJESNO UNESEN I HESIRAN PASSOWRD! ");
    });
});


//provejra za login! 
router.post("/login", async (req, res) =>{
    const {username, password } = req.body;

    const user = await Users.findOne({ where: {username: username} });

    if(!user) res.json({error: "Nema tog korisnika u bazi! :("});

    bcrypt.compare(password, user.password).then((match) =>{
        if(!match) res.json({error: "Pogresan Username ili Password! :("});
        
        const accessToken = sign({username: user.username, id: user.id}, "vaznatajna" );

        

        res.json({token: accessToken , username: username, id: user.id});
    });

});
//vazno za login i logout
router.get("/auth", validateToken, (req, res) => {
    res.json(req.user);
});


module.exports = router