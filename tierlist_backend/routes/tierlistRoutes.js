const express = require('express');
const { createTierList, getTierLists, getTierListById, deleteTierList } = require('../controllers/tierlistController');
// Importer le middleware d'authentification qui protège les routes en fonction du token JWT de l'utilisateur connecté
const TierList = require('../models/tierlistModel');  

const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

// Route publique (accessible sans authentification)
router.get('/public', async (req, res) => {
    try {
        const publicTierLists = await TierList.find({ isPublic: true });
        res.json(publicTierLists);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Toutes les routes en bas sont protégées (authentification requise sinon pas possible)
router.use(protect);

router.post('/', createTierList);
router.get('/', getTierLists);
router.get('/:id', getTierListById);
router.delete('/:id', deleteTierList);

module.exports = router;
