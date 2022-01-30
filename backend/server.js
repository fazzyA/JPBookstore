const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const booksRoute = require('./routes/booksRoute.js')
const userRoute = require('./routes/userRoute.js')
const dbconnect = require('./config/database')
const app = express();
dbconnect();


dotenv.config();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send(`server is running at ${PORT}`)
});

app.use('/books',booksRoute);
app.use('/users', userRoute);

app.listen(PORT, ()=>{
    console.log(`server is running at ${PORT}`)
});