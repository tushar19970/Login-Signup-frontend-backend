const {generateToken, accessToken} = require('../Auth/jwt')
const express = require('express')
const jwt = require('jsonwebtoken')
const user1 = express.Router()
const bcrypt = require('bcrypt')
const knex = require('../databses/db')
const bodyParser = require("body-parser")
user1.use(bodyParser.urlencoded({extended: true}));

user1.post('/login', (req, res) => { 
    knex.select("*").from('user_data')
    .where('email',req.body.email).then((data) => {
        if (data < 1) {
            res.send('You cant login this page\nBecause you did not signup yet..')
        } else {
            const match = bcrypt.compareSync(req.body.password, data[0].password)
            if(match){
                const data1 = {
                    'email':data[0].email,
                    'password':data[0].password,
                    'name':data[0].name,
                    'last_name':data[0].last_name, 
                    "phone":data[0].phone
                }
                const token = generateToken(data1)
                res.cookie('token', token) 
                res.redirect('/index')
            }else{
                res.redirect('/login')
            }
        }
    })
})

module.exports = user1