import express from 'express';
const router = express.Router();
import {getUserById, signup, getAllUsers, login, logout, verifyEmail, forgotPassword, resetPassword, checkAuth} from '../controllers/auth.controller.js'
import { protectAuth } from '../middleWare/protectAuth.js'

router.get("/check-auth", protectAuth, checkAuth)
router.post('/register', signup)
router.get('/profile',protectAuth, getAllUsers)
router.get('/profile/:id', protectAuth, getUserById)
router.post('/login', login)
router.post('/logout', logout)
router.post('/verify-email', verifyEmail)
router.post('/forgot-password', forgotPassword)
router.post('/reset-password/:token', resetPassword)

export default router