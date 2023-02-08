const Train = require("../models/trains");

// crating students
module.exports.train_register = (req,res) => {
    const user = new Train(req.body);
    user.save().then(() => {
        res.status(201).send(user);
    }).catch((e) => {
        res.status(400).send(e);
    })
}
