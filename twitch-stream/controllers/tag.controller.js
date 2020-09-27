const db = require('../models');
const Tag = db.tags;
const Post = db.posts;

// create new tag
export const createTag = async (req, res) => {
  try {
    const { name } = req.body;
    const tag = await Tag.create({
      name,
    });

    res.status(200).json({ tag });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: error,
    });
  }
};

//  get all tags
export const getAllTags = async (req, res) => {
  try {
    const tags = await Tag.findAll({
      include: [
        {
          model: Post,
          as: 'posts',
          attributes: ['id', 'title', 'description'],

          // from junction model
          through: {
            attributes: [],
          },
        },
      ],
    });
    if (tags.length < 1) return res.json({ msg: 'No tags found' });

    res.json({ tags });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: error,
    });
  }
};

// add post to a tag
export const addPostToTag = async (req, res) => {
  try {
    const { tagId, postId } = req.body;
    let tag = await Tag.findByPk(tagId);
    if (!tag) return res.status(400).json({ msg: 'Tag not found' });

    const post = await Post.findByPk(postId);
    if (!post) return res.status(400).json({ msg: 'Post not found' });

    await tag.addPost(post); // addPOst() is built inmethod -> ref: https://sequelize.org/master/manual/assocs.html#special-methods-mixins-added-to-instances
    return res.json({ tag });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      error: error.message,
    });
  }
};

// find post/tag to the given tag id
export const findById = async (req, res) => {
  try {
    const tagId = req.params.id;
    const tag = await Tag.findByPk(tagId, {
      attributes: ['id', 'name'], // except password
      include: [
        {
          model: Post,
          as: 'posts',
          attributes: ['id', 'title', 'description'],
          through: {
            attributes: [],
          },
        },
      ],
    });
    res.status(200).json({ tag });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};
