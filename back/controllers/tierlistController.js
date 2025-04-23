import TierList from '../models/tierList.js';


export const getTierLists = async (req, res) => {
  try {
    const tierLists = await TierList.find();
    res.json(tierLists);
  } catch (error) {
    console.error("Erreur lors de la récupération des Tier Lists :", error.message);
    res.status(500).json({ message: "Erreur serveur" });
  }
};


export const createTierList = async (req, res) => {
  try {
    const { title, coverImage, categories, items } = req.body;

    if (!title || !coverImage || !categories) {
      return res.status(400).json({ message: 'Champs requis manquants.' });
    }

    const newTierList = new TierList({
      title,
      coverImage,
      categories,
      items,
    });

    const savedTierList = await newTierList.save();
    res.status(201).json(savedTierList);
  } catch (error) {
    console.error('Erreur lors de la création de la Tier List :', error.message);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};
