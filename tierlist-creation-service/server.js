import dotenv from 'dotenv';
import app from './app.js';
import connectDB from './config/db.js';

// Load environment variables from .env file
dotenv.config();

// Connect to the database
connectDB();

// Start the server
const PORT = process.env.PORT || 3001;  // Use custom port from .env or default to 3001
app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
