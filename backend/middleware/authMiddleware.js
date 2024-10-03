import jwt from 'jsonwebtoken';

// Middleware to verify token and authenticate users
export const authMiddleware = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: 'Access Denied: No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach the decoded token (which contains `id` and `role`) to `req.user`

    // Log to check if `req.user` contains the expected `id` and `role`
    console.log('Decoded Token:', decoded);

    next();
  } catch (error) {
    console.error('Token verification error:', error);
    res.status(400).json({ message: 'Invalid Token' });
  }
};

// Middleware to check if the user is an admin
export const adminMiddleware = (req, res, next) => {
  // Check if the user's role is 'admin'
  if (req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Access denied, admin only' });
  }

  // If the user is admin, proceed to the next step
  next();
};
