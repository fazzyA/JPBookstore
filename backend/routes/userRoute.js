const express = require('express');
const User = require('../model/users');
const { route } = require('./booksRoute');
const router = express.Router();

router.get('/', async (req, res) => {
    const users = await User.find()
    res.json(users).status(200)
})

router.post('/', async (req, res) =>{
    const user = new User(req.body)
    const createdUserr =  await user.save()
     res.json(createdUserr).status(201)

})

module.exports = router

