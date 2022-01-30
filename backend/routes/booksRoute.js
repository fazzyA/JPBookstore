// all books route
const express = require('express');
const books = require('../data.js')
const Book = require('../model/books.js')
const router = express.Router();

router.get('/', async (req, res) => {
    try {
       const books = await Book.find();
    console.log(books)
    res.json(books).status(200);
     
    } catch (error) {
        console.log(error)
        
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    console.log(id)
    try{
    const singlebook = await Book.findById(id)
        // const singleBk = books.filter(item => item.id == id)
        res.json(singlebook).status(200);
        // res.json({message: "book not found"})
    
    } catch (e){
        console.log(`server is running at ${e}`)

    }
    ///

})

router.post('/', async (req, res) => {
    try {
        console.log(req.body)
        // books.push(req.body)
        const book = new Book({
            title: "book1",
            price: 400,
            author: "faiza",
            description: "the book"
        })
        const newbook = await book.save();
    
        res.json({message: "data created", data:newbook})
        .status(201);
            
    } catch (error) {
        console.log(error)       
    }
    // res.send(`add books list`);

})
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    console.log(id)
    try{
    const singlebook = await Book.findByIdAndDelete(id)
        // const singleBk = books.filter(item => item.id == id)
        res.json(singlebook).status(200);
        // res.json({message: "book not found"})
    
    } catch (e){
        console.log(`server is running at ${e}`)
    }

})

module.exports = router;