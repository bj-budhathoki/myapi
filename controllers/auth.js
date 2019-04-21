const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const signup = async (req, res) => {
  const userExists = await User.findOne({ email: req.body.email });
  if (userExists) return res.status(403).json({ error: "Already exist !" });
  const newUser = await new User(req.body);
  await bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) throw err;
      newUser.password = hash;
      newUser.save();
      res.json({ sucess: true });
    });
  });
};

const signin = async (req, res) => {
  const { email, password } = req.body;
  //find a user
  const user = await User.findOne({ email });
  if (!user) return res.status(404).json({ error: "user not found" });
  const isMatch = await bcrypt.compare(password, user.password);
  if (isMatch) {
    //user matched generate token
    const payload = { id: user._id, name: user.name, email: user.email };
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: 3600 },
      (err, token) => {
        res.send({
          success: true,
          token: "Bearer " + token
        });
      }
    );
  } else {
    return res.status(400).json({ error: "incerroct password" });
  }
};

module.exports = {
  signup,
  signin
};
