const express = require('express');
const User = require('../model/users');
const { route } = require('./booksRoute');
const router = express.Router();
var bcrypt = require('bcryptjs');

router.get('/', async (req, res) => {
    const users = await User.find()
    res.json(users).status(200)
})

router.post('/login', async (req, res) => {
    const { email, password} = req.body
    const user = await User.findOne({email})
    if(user){
       const match = await bcrypt.compare(password, user.password);
       if(match){
           res.json({message: "login successfull", data: user})
       }else{
           res.json({ message: "password doesnot match", data: null})
       }

    }

})

router.post('/register', async (req, res) => {
    console.log(req.body)
    let { email, password } = req.body;

    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(password, salt);
    // const newUser = await User.create(req.body);
    console.log(hash);
    if(hash) {
        const newUser = { email, password: hash}
        const newUserDb = await User.create(newUser);
        console.log(newUserDb);
        res.json({user: newUserDb, message: "new user created successfully"}).status(201);
    }
})

module.exports = router

