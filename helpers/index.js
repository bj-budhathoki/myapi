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
module.exports = {
  createPostValidator
};
