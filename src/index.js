const dotenv = require('dotenv');
const app = require('./app');

dotenv.config();

const PORT = process.env.PORT || 5555;

app.listen(PORT, () => {
  console.log(`🚀 Server started at http://localhost:${PORT} 🚀`);
});
