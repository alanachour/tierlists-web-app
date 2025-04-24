require('dotenv').config();   // ← Cette ligne doit être en premier
const app = require('./app');

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Stats service running on port ${PORT}`);
});

