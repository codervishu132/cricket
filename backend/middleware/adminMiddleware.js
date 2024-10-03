export const adminMiddleware = (req, res, next) => {
    // Check if `req.user` exists and has the `role` property
    if (!req.user || req.user.role != 'admin') {
      return res.status(403).json({ message: 'Access Denied: Admins only' });
    }
    console.log('req.user:', req.user); // Add this log to see the contents of `req.user`

    next();

  };
  