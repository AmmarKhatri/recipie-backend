const Recipie = require("../../models/Recipie")
async function listRecipies(req, res) {
    try {
        let recipies = await Recipie.find().populate('ingredients');
        //recipies returned
        return res.json({recipies})
    } catch (error) {
        return res.json({
            error: 500, 
            message: error 
        })
    }
};

module.exports = listRecipies;