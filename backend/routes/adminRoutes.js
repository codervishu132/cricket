import express from 'express';
import { adminCreateMatch, updateScore, endMatch, getAllMatches } from '../controllers/adminController.js';
import { authMiddleware, adminMiddleware } from '../middlewares/authMiddleware.js';
import { adminCreateMatch } from '../controller/userController.js';

const router = express.Router();

// Route for creating a match (admin only)
router.post('/match/create', authMiddleware, adminMiddleware, adminCreateMatch);

// Route for updating match score (admin only)
router.put('/match/:matchId/score', authMiddleware, adminMiddleware, updateScore);

// Route for ending a match (admin only)
router.put('/match/:matchId/end', authMiddleware, adminMiddleware, endMatch);

// Route for getting all matches (admin only)
router.get('/matches', authMiddleware, adminMiddleware, getAllMatches);

export default router;
