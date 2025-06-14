const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const reviewsRoutes = require('./routes/reviewsRoutes');
const giftRoutes = require('./routes/giftRoutes');
const bagRoutes = require('./routes/bagRoutes');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/gifts', giftRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/reviews', reviewsRoutes);
app.use('/api/bags', bagRoutes);

const PORT = process.env.PORT || 3016;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB:', error);
  });

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
