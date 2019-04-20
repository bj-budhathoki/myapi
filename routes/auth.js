const express = require("express");
const router = express.Router();
const { signupValidator } = require("../helpers");
const { signup } = require("../controllers/auth");
router.post("/signup", signupValidator, signup);

module.exports = router;
