import express from 'express';
import { createTierList, getTierLists } from '../controllers/tierlistController.js';

const router = express.Router();

router.post('/tierlists', createTierList);  // Handles POST requests to create a new tier list
router.get('/tierlists', getTierLists);     // Handles GET requests to retrieve all tier lists

export default router;
