const { BlogPost } = require('../models');

const authorizedUser = async (postId, idUser) => {
  const post = await BlogPost.findOne({
    where: { id: postId === idUser },
  });

  return post;
};

module.exports = authorizedUser;
