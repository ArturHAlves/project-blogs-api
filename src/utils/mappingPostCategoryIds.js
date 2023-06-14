module.exports = (CategoryIds, postId) => {
  const createPostCategory = CategoryIds.map((ids) => ({
    postId,
    categoryId: ids,
  }));

  return createPostCategory;
};
