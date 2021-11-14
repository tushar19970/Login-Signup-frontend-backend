require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static(__dirname+'/public'))


app.get('/home',function(req,res){
    res.sendFile('/home/navgurukul25/Desktop/login-signup-page-html/public/login.html')
})

app.get('/index',function(req,res){
    res.sendFile('/home/navgurukul25/Desktop/login-signup-page-html/public/index.html')
})

app.get('/signup',function(req,res){
    res.sendFile('/home/navgurukul25/Desktop/login-signup-page-html/public/signup.html')
})

app.get('/login',function(req,res){
    res.sendFile('/home/navgurukul25/Desktop/login-signup-page-html/public/login.html')
})

// moddlewear in file path
app.use('/',require('./routes/login'))
app.use('/',require('./routes/signup'))




const port = process.env.PORT || 2012

app.listen(port, () => {
    console.log("connected");
})