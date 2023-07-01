const { Op } = require('sequelize');
const { BlogPost } = require('../models');

const authorizedUser = async (id, userId) => {
  const post = await BlogPost.findOne({
    where: {
      [Op.and]: [{ id }, { userId }],
    },
  });

  return post;
};

module.exports = authorizedUser; 
