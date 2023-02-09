const { Router } = require("express");
const authController = require("../controllers/authControllers");

const router = Router();

router.get("/availability", authController.train_availability);
router.post("/trains", authController.train_register);

module.exports = router;