const postService = require('../services/post.service');
const { authorizedUser, authorizedUser2 } = require('../utils/authorizedUser');

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

const updatePost = async (req, res) => {
  try {
    const { id: userId } = req.locals;
    const { id } = req.params;
    const { title, content } = req.body;

    const authorized = await authorizedUser(Number(id), userId);
    if (!authorized) {
      return res.status(401).json({ message: 'Unauthorized user' });
    }

    await postService.updatedPost(id, title, content, userId);

    const post = await postService.getById(id);

    return res.status(200).json(post);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deletePost = async (req, res) => {
  try {
    const { id: userId } = req.locals;
    const { id } = req.params;

    const post = await postService.getById(id);

    if (!post) {
      return res.status(404).json({ message: 'Post does not exist' });
    }

    const authorized = await authorizedUser2(Number(id), userId);
    if (!authorized) {
      return res.status(401).json({ message: 'Unauthorized user' });
    }

    await postService.deletePost(id);

    return res.status(204).end();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { createPost, getAll, getById, updatePost, deletePost };
