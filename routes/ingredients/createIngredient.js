const Ingredient = require("../../models/Ingredient")
const Users = require("../../models/User")
async function createIngredient(req, res) {
    try {
        const { email } = req.user
        let user = await Users.findOne({ email })
        //user doesnt exist
        if (user.role != "ADMIN") return res.json({
            error: 403,
            message: "User does not have previlige."
        })
        if (!user) return res.json({ message: "User doesn't exist!" })
        const ingredient = await Ingredient.create({ ...req.body, createdBy: user._id});
        // Save the updated user document
        await user.save();
        return res.json({ msg: "CREATED INGREDIENT", ingredient })
    } catch (error) {
        return res.json({ msg: error })
    }
};

module.exports = createIngredient;