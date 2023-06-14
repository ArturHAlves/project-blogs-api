const { PostCategory } = require('../models');

const createPostCategory = async (array) => {
  await PostCategory.bulkCreate(array);
};

module.exports = { createPostCategory };
