const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Routes
const tierlistRoutes = require('./routes/tierlistRoutes');
const authRoutes = require('./routes/authRoutes');

app.use('/api/tierlists', tierlistRoutes);
app.use('/api/auth', authRoutes);  

app.listen(PORT, () => {
    console.log(`Serveur en écoute sur http://localhost:${PORT}`);
});
