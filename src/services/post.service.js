// Op - Operadores do Sequelize  
const { Op } = require('sequelize');
const { BlogPost, User, Category } = require('../models');
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

const getAll = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, 
        as: 'user',
        attributes: { exclude: ['password'] },
      },

      { model: Category, 
        as: 'categories', 
        attributes: ['id', 'name'], 
        through: { attributes: [] } },
    ],
  });

  return posts;
};

const getById = async (id) => {
  const post = await BlogPost.findOne({
    where: { id },
    include: [
      { model: User, 
        as: 'user',
        attributes: { exclude: ['password'] },
      },

      { model: Category, 
        as: 'categories', 
        attributes: ['id', 'name'], 
        through: { attributes: [] } },
    ],
  });

  return post;
};

const updatedPost = async (id, title, content, userId) => {
 const post = await BlogPost.update({ title, content }, { where: { 
  [Op.and]: [
    { id }, { userId },
  ],
  } });

  return post;
};

const deletePost = async (id) => {
const post = await BlogPost.destroy({ where: {
  id,
} });

  return post;
};

module.exports = { createPost, getAll, getById, updatedPost, deletePost };
