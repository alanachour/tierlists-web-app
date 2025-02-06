const mongoose = require('mongoose');

const tierlistSchema = new mongoose.Schema({
    name: { type: String, required: true },
    categories: [String],
    items: [String],
    isPublic: { type: Boolean, default: false },  // Ajout du champ "isPublic" pour définir si la Tier List est publique ou privée
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('TierList', tierlistSchema);
