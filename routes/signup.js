const express = require("express");
const user = express.Router();
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const knex = require("../databses/db");
user.use(bodyParser.urlencoded({extended: true}));

user.post("/signup", async (req, res) => {
    let data=req.body.password
    const password = await bcrypt.hash(data, 10);
    knex.select("*").from("user_data").where("email", req.body.email).then((data) => {
        if (data.length < 1) {
            knex("user_data")
            .insert({
                name: req.body.name,
                last_name: req.body.last_name,
                email: req.body.email,
                phone: req.body.phone,
                password: password,
            })
            .then((data) => {
                res.send("<h1>You have signup successfully..</h1>");
                console.log("<h1>You have signup successfully..</h1>");
            })
            .catch((err) => {
                console.log(err);
                res.send(err.message);
            });
        } else {
            res.send("<h1>You have already signup :</h1>");
            console.log("<h1>You have already signup :</h1>");
        }
    });
});

module.exports = user;
