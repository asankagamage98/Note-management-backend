// Import the mongoose library
const mongoose = require('mongoose')

//connect to the MongoDB database
const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log(' successfully connected  MongoDB')
    } catch (error) {
        console.log('Connect failed ' + error.message)
    }
}

module.exports = { dbConnect }
