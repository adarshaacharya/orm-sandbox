const db = require('../models');
const Post = db.posts;

export const CreatePost = async (req, res) => {
  try {
    const { title, description } = req.body;
    const post = await Post.create({
      title,
      description,
    });

    res.status(201).json({ post });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: 'Error in creating post.',
    });
  }
};
