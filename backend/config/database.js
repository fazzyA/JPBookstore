const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

async function dbconnect() {
   await mongoose.connect(process.env.MONGO_URL, () => {
        console.log('mongodb is connected')
    }) 
}
module.exports = dbconnect