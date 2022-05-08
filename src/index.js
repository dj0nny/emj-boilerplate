const dotenv = require('dotenv');
const app = require('./app');

const connectDB = require('./db');

dotenv.config();

const PORT = process.env.PORT || 5555;

connectDB();

app.listen(PORT, () => {
  console.log(`🚀 Server started at http://localhost:${PORT} 🚀`);
});
