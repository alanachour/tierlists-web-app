const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

exports.protect = async (req, res, next) => {
    let token = req.headers.authorization;

    if (token && token.startsWith('Bearer ')) {
        token = token.split(' ')[1];

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.id).select('-password');

            if (!req.user) {
                return res.status(401).json({ error: 'Utilisateur non trouvé' });
            }

            next();
        } catch (error) {
            return res.status(401).json({ error: 'Token invalide' });  // Uniquement si le token est corrompu
        }
    } else {
        return res.status(401).json({ error: 'Pas de token fourni' });
    }
};
