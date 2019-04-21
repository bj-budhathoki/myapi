const express = require("express");
const router = express.Router();
const { signupValidator } = require("../helpers");
const { signup, signin } = require("../controllers/auth");
router.post("/signup", signupValidator, signup);

/**
 * @route GET api/v1/signin
 * @Desc login user
 * @accesss public
 */
router.post("/signin", signin);

module.exports = router;
