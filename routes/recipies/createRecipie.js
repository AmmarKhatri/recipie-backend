const Recipie = require("../../models/Recipie")
const Users = require("../../models/User")
async function createRecipie(req, res) {
    try {
        const { email } = req.user
        let user = await Users.findOne({ email })
        //user doesnt exist
        if (user.role != "ADMIN") return res.json({
            error: 403,
            message: "User does not have previlige."
        })
        if (!user) return res.json({ message: "User doesn't exist!" })
        const recipie = await Recipie.create({ ...req.body, createdBy: user._id});
        // Save the updated user document
        user.recipies.push(recipie._id);
        await user.save();
        return res.json({ message: "CREATED RECIPIE", recipie })
    } catch (error) {
        return res.json({
            error: 500, 
            message: error 
        })
    }
};

module.exports = createRecipie;