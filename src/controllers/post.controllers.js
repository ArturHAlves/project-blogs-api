const postService = require('../services/post.service');

const createPost = async (req, res) => {
  try {
    const { body } = req;
    const user = req.locals;

    const post = await postService.createPost(body, user);

    return res.status(201).json(post);
  } catch (error) {
    return res.status(error.status || 500).json({ message: error.message });
  }
};

module.exports = { createPost };