const { BlogPost } = require('../models');
const mappingId = require('../utils/mappingPostCategoryIds');
const CategoryService = require('./category.service');
const PostCategoryService = require('./postCategory.service');

// 14/jun - Ajuda Pablo
const createPost = async ({ title, content, categoryIds }, user) => {
  const category = await CategoryService.getById(categoryIds);
  
  const hasCategory = await 
  Promise.all(category.map(({ dataValues: { id } }) => id !== categoryIds));

  if (hasCategory.length !== categoryIds.length) {
    const error = new Error('one or more "categoryIds" not found');
    error.status = 400;
    throw error;
  }

  const newPost = await BlogPost.create({
    title,
    content,
    userId: user.id,
    published: new Date(),
    updated: new Date(),
  });
  const postCategory = await mappingId(categoryIds, newPost.id);

  await PostCategoryService.createPostCategory(postCategory);

  return newPost;
};

module.exports = { createPost };
