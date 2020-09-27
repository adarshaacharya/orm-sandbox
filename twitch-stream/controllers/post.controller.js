const db = require('../models');
const User = db.users;
const Post = db.posts;
const Tag = db.tags;

// create new post
export const createPost = async (req, res) => {
  try {
    const { title, description, userId } = req.body;
    const post = await Post.create({
      title,
      description,
      userId,
    });

    res.status(201).json({ post });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: 'Error in creating post.',
    });
  }
};

// find the post for given post id
export const findPostById = async (req, res) => {
  try {
    const postId = req.params.id;
    const post = await Post.findByPk(postId, {
      include: [
        {
          model: User,
          as: 'user',
          attributes: ['id', 'name', 'email', 'phoneNumber'],
        },
        {
          model: Tag,
          as: 'tags',
          attributes: ['id', 'name'],
          through: {
            attributes: [],
          },
        },
      ],
    });

    res.json({ post });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: 'Error in fetching post.',
    });
  }
};

// delete post by postid
export const deletePostById = async (req, res) => {
  try {
    const postId = req.params.id;
    const post = await Post.destroy({
      where: {
        id: postId,
      },
    });

    if (!post) return res.json({ msg: 'Cannot delete the post' });

    res.status(500).json({ msg: 'Post deleted' });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: 'Error in deleting post.',
    });
  }
};
