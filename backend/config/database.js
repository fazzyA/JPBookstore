const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

async function dbconnect() {
    try {
    await mongoose.connect(process.env.MONGO_URL, () => {
        console.log('mongodb is connected')
    }) 
    } catch (e) {
        console.log(e);
    }
}
module.exports = dbconnect