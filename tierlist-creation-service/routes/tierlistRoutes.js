import express from 'express';
import { createTierList, getTierLists } from '../controllers/tierlistController.js';

const router = express.Router();

router.post('/tierlists', createTierList);
router.get('/tierlists', getTierLists); // <- celle-ci

export default router;
