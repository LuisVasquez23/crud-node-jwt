const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  jwt.verify(token, 'your_secret_key', (err, decoded) => {
    if (err) {
      console.error(err); // Log the error for debugging
      return res.status(401).json({ message: 'Invalid token' });
    }
    req.user = decoded; // Attach user info to the request
    next();
  });
};

module.exports = authMiddleware;
