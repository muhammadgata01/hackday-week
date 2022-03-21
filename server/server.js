// Import express
const express = require('express');
// Import cors
const cors = require('cors');

// Init express
const app = express();

// Aktifkan semua request cors
app.use(cors());
// Parse request data type app/json
app.use(express.json());
// Parse request data type app/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Root route
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Hello World',
  });
});

// Import post route from routes/postRoutes
const router = require('./routes/postRoutes');

// Buat url ke router postRouter
app.use('/v1/api', router);

// Definisikan port
const PORT = process.env.PORT || 5000;

// Listen port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
