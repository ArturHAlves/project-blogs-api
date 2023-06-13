/**
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */

module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define(
    'PostCategory',
    {
      postId: {
        primaryKey: true,
        type: DataTypes.INTEGER,

        references: {
          model: 'blog_posts',
          key: 'id',
        },
      },
      categoryId: {
        primaryKey: true,
        type: DataTypes.STRING,

        references: {
          model: 'categories',
          key: 'id',
        },
      },
    },
    {
      tableName: 'posts_categories',
      timestamps: false,
      underscored: true,
    }
  );

  PostCategory.associate = ({ BlogPost, Category }) => {
    BlogPost.belongsToMany(Category, {
      through: PostCategory,
      as: 'categories',
      foreignKey: 'post_id',
      otherKey: 'category_id',
    });

    Category.belongsToMany(BlogPost, {
      through: PostCategory,
      as: 'blog_posts',
      foreignKey: 'category_id',
      otherKey: 'post_id',
    });
  };

  return PostCategory;
};
