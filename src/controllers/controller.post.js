const services = require('../services/service.post');

const createPost = async (req, res) => {
  try {
    const { title, content, categoryIds } = req.body;
    const newPost = await services
      .createPost(req.userId, title, content, categoryIds);
    res.status(201).json(newPost);
  } catch (e) {
    console.log(e.message);
    res.status(400).json({
      message: 'one or more "categoryIds" not found',
    });
  }
};

module.exports = {
  createPost,
};