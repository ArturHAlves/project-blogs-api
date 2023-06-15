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

const getAll = async (req, res) => {
  try {
    const posts = await postService.getAll();

    return res.status(200).json(posts);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;

    const post = await postService.getById(id);

    if (!post) {
      return res.status(404).json({ message: 'Post does not exist' });
    }

    return res.status(200).json(post);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { createPost, getAll, getById };
