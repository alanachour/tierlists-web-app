const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connecté à MongoDB local !");
    } catch (err) {
        console.error("Erreur de connexion MongoDB :", err);
        process.exit(1);
    }
};

module.exports = connectDB;
