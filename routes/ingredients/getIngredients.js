const Ingredient = require("../../models/Ingredient")
async function getIngredients(req, res) {
    try {
        let ingredients = await Ingredient.find();
        //user doesnt exist
        return res.json({ingredients})
    } catch (error) {
        return res.json({
            error: 500, 
            message: error 
        })
    }
};

module.exports = getIngredients;