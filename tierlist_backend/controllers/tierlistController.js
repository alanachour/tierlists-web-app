const TierList = require('../models/tierlistModel');

//  Créer une Tier List
exports.createTierList = async (req, res) => {
    try {
        const { name, categories, items, isPublic } = req.body;

        const tierListCount = await TierList.countDocuments({ user: req.user._id });
        if (tierListCount >= 5) {
            return res.status(400).json({ error: "Limite de 5 Tier Lists atteinte" });
        }

        const newTierList = await TierList.create({
            name,
            categories,
            items,
            isPublic: isPublic || false,  // Par défaut privé si non précisé
            user: req.user._id
        });
        res.status(201).json(newTierList);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};



//  Obtenir toutes les Tier Lists de l'utilisateur connecté
exports.getTierLists = async (req, res) => {
    try {
        const tierLists = await TierList.find({ user: req.user._id });
        res.json(tierLists);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//  Obtenir une Tier List spécifique (avec vérification de propriété)
exports.getTierListById = async (req, res) => {
    try {
        const tierList = await TierList.findById(req.params.id);

        if (!tierList) {
            return res.status(404).json({ error: "Tier List non trouvée" });
        }

        // Si le token est valide mais que l'utilisateur n'est pas le propriétaire :
        if (tierList.user.toString() !== req.user._id.toString()) {
            return res.status(403).json({ error: "Accès refusé" });
        }

        res.json(tierList);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



//  Supprimer une Tier List (avec vérification de propriété)
exports.deleteTierList = async (req, res) => {
    try {
        const tierList = await TierList.findById(req.params.id);
        if (!tierList) {
            return res.status(404).json({ error: "Tier List non trouvée" });
        }
        if (tierList.user.toString() !== req.user._id.toString()) {
            return res.status(403).json({ error: "Accès refusé" });  // Erreur 403 par convention est utilisée pour l'interdiction d'accès
        }
        await tierList.deleteOne();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
