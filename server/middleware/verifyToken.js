const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  // Make sure token is present and well-formed
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach decoded token to request object
    next();
  } catch (err) {
    console.error('JWT verification failed:', err.message);
    res.status(403).json({ error: 'Invalid token' });
  }
};

module.exports = verifyToken;
