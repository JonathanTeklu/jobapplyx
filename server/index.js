mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB ✅'))
.catch((err) => console.error('MongoDB error:', err));



// index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

//MongoDB connection
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);


// Sample route
app.get('/', (req, res) => {
  res.send('JobApplyX API is running');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
