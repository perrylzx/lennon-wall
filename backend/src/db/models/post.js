'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    content: DataTypes.STRING
  }, {});
  Post.associate = function(models) {
    Post.belongsTo(models.Wall)
  };
  return Post;
};