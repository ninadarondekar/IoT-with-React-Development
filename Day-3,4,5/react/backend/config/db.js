// npm install mongoose
// Function to collect MongoDB
const mongoose = require("mongoose");
// asynchronous function to connect to MongoDB
const connectDB = async () => {
    try {
        // .env file (no info visible), don't directly pass
        const response = await mongoose.connect(process.env.MONGODB_URI)
        console.log("MongoDB connected")
    }
    catch (error) {
        console.log('MongoDB not connected!')
    }
}

module.exports = connectDB;
// npm install dotenv
// create .env file
// Connect MongoDB with url