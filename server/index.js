const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

// Default test route
app.get('/', (req, res) => {
  res.send('JobApplyX API is running');
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)

.then(() => {
  console.log('Connected to MongoDB ✅');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
.catch(err => {
  console.error('MongoDB connection error:', err);
});

const protectedRoutes = require('./routes/protected');
app.use('/api/protected', protectedRoutes);


const messageRoutes = require('./routes/messages');
app.use('/api/messages', messageRoutes);
  
