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


app.use('/books',booksRoute);
app.use('/users', userRoute);

if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
    const path = require('path');
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend","build", "index.html"))
    })
} else {
    app.get('/', (req, res) => {
        res.send(`server is running at ${PORT}`)
    });
    
}

app.listen(PORT, ()=>{
    console.log(`server is running at ${PORT}`)
});