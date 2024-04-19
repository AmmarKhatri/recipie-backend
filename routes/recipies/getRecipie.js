const Recipie = require("../../models/Recipie")
async function getRecipie(req, res) {
    try {
        let recipie = await Recipie.findOne({_id: req.params.id}).populate("ingredients");
        //recipies returned
        return res.json({recipie})
    } catch (error) {
        return res.json({
            error: 500, 
            message: error 
        })
    }
};

module.exports = getRecipie;