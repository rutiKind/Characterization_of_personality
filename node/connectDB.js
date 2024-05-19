const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config()

const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.LOCAL_URI);
        console.log('Connected to the database');
    } catch (error) {
        console.error('Error connecting to the database:', error.message);
    }
}

const database = mongoose.connection;

database.on('error', (error) => {
    console.error('Database connection error:', error.message);
});

database.once('connected', () => {
    console.log('Database connected!');
});

module.exports = connectToDB;
