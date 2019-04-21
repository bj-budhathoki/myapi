const createPostValidator = (req, res, next) => {
  //title
  req.check("title", "write a title").notEmpty();
  req.check("title", "Title must be 4 to 150 character").isLength({
    min: 4,
    max: 150
  });
  req.check("body", "write a body").notEmpty();
  req.check("body", "body must be 4 to 2000 character").isLength({
    min: 4,
    max: 2000
  });

  let errors = req.validationErrors();
  if (errors) {
    firstError = errors.map(error => error.msg)[0];
    return res.status(400).json({ error: firstError });
  }
  next();
};
const signupValidator = (req, res, next) => {
  req.check("name", "name is required").notEmpty();
  req
    .check("email", "Email must be between 3 to 32 character")
    .matches()
    .withMessage("email must contain @")
    .isLength({
      min: 4,
      mxa: 200
    });
  req.check("password", "password is required").notEmpty();
  req
    .check("password")
    .isLength({ mix: 6 })
    .withMessage("Password must containa at least 6 characters")
    .matches(/\d/)
    .withMessage("Must contain a number");

  let errors = req.validationErrors();
  if (errors) {
    firstError = errors.map(error => error.msg)[0];
    return res.status(400).json({ error: firstError });
  }
  next();
};

module.exports = {
  createPostValidator,
  signupValidator
};
