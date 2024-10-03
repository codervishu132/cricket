// routes/userRoutes.js
import express from 'express';
import { register, login } from '../controller/userController.js';
import { adminCreateMatch } from '../controller/adminController.js'; // Import adminCreateMatch function
import { adminMiddleware } from '../middleware/adminMiddleware.js'; // Import adminMiddleware
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
// Ensure middleware and function are correctly used
  // Route definition
  router.post('/admin/create-match',authMiddleware, adminCreateMatch);
export default router;
