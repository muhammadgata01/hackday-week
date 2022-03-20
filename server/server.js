const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routers
const router = require('./routes/postsRoutes');
app.use('/v1/api', router);

// Testing
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Hello World',
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
