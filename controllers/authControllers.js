const Train = require("../models/trains");

// crating trains
module.exports.train_register = (req,res) => {
    const train = new Train(req.body);
    train.save().then(() => {
        res.status(201).send(train);
    }).catch((e) => {
        res.status(400).send(e);
    })
}
