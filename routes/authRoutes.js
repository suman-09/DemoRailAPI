const { Router } = require("express");
const authController = require("../controllers/authControllers");

const router = Router();

router.post("/trains", authController.train_register);

module.exports = router;