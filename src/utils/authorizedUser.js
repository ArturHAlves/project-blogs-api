const { Op } = require('sequelize');
const { BlogPost } = require('../models');

const authorizedUser = async (postId, idUser) => {
  const post = await BlogPost.findOne({
    where: { id: postId === idUser },
  });

  return post;
};

const authorizedUser2 = async (id, userId) => {
  const post = await BlogPost.findOne({
    where: {
      [Op.and]: [{ id }, { userId }],
    },
  });

  return post;
};

module.exports = { authorizedUser, authorizedUser2 };
