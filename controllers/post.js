const Post = require("../models/Post");
const getPosts = (req, res, next) => {
  res.json({
    title: "post one"
  });
};
const createPost = (req, res) => {
  const newPost = new Post(req.body);
  console.log("create post", req.body);
  newPost
    .save()
    .then(post => {
      res.status(200).json({ success: true, post });
    })
    .catch(err => res.status(400).json({ success: false, err }));
};
module.exports = {
  getPosts,
  createPost
};
