require('dotenv').config();  // Loads environment variables from a .env file

const app = require('./app');

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Stats service running on port ${PORT}`);
});
