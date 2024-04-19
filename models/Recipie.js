const mongoose = require('mongoose');

const RecipieSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true, // Ensures email is unique
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: "",
        required: false
    },
    ingredients: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Ingredients' }],
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users', // Reference to the Users model
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
});

const Recipies = mongoose.model('Recipies', RecipieSchema);

module.exports = Recipies;
