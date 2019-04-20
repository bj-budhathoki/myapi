const User = require("../models/User");
const signup = async (req, res) => {
  const userExists = await User.findOne({ email: req.body.email });
  if (userExists) return res.status(403).json({ error: "Already exist !" });
  const user = await new User(req.body);
  await user.save();
  res.json({ sucess: true });
};
module.exports = {
  signup
};
