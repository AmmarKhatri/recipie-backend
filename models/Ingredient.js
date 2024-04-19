const mongoose = require('mongoose');

const IngredientSchema = new mongoose.Schema({
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
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
});

const Ingredients = mongoose.model('Ingredients', IngredientSchema);

module.exports = Ingredients;
