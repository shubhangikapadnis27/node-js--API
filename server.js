require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();

const mongoUri = process.env.MONGO_URI;
if (!mongoUri) {
  console.error("Error: MONGO_URI is not defined in environment variables.");
  process.exit(1);
}

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

app.use(express.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
