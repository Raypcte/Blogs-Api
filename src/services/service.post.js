const { BlogPost, PostCategory } = require('../models');

const createPostCategory = async (postId, categoryIds) => {
  const promises = categoryIds.map((categoryId) => (
     PostCategory.create({
      postId, categoryId,
    })
  ));
  await Promise.all(promises);
};

const createPost = async (userId, title, content, categoryIds) => {
  const newObj = {
    title,
    content,
    userId,
    updated: new Date(),
    published: new Date(),
  };
  const newPost = await BlogPost.create(newObj);
  await createPostCategory(newPost.dataValues.id, categoryIds);
  return newPost;
};

module.exports = {
  createPost,
};
