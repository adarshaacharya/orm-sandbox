const db = require('../models');
const Tutorial = db.tutorial;
const Tag = db.tag;

//Create and Save new Tag
exports.create = async (tag) => {
  const { name } = tag;
  try {
    const tag = await Tag.create({
      name,
    });
    console.log('>> Created Tag: ' + JSON.stringify(tag, null, 2));
    return tag;
  } catch (error) {
    console.log('>> Error while creating Tag: ', error);
  }
};

//Find all Tags
exports.findAll = async () => {
  try {
    const tags = await Tag.findAll({
      // also get these thinsg from tutorial model
      include: [
        {
          model: Tutorial,
          as: 'tutorials',
          attributes: ['id', 'title', 'description'],

          // what to get from junction model !!!
          through: {
            attributes: [],
          },
        },
      ],
    });

    return tags;
  } catch (error) {
    console.log('>> Error while retrieving Tags: ', error);
  }
};

// /Find a Tag for a given Tag id
exports.findById = async (id) => {
  try {
    const tag = await Tag.findByPk(id, {
      include: [
        {
          model: Tutorial,
          as: 'tutorials',
          attributes: ['id', 'title', 'description'],

          through: {
            attributes: [],
          },
        },
      ],
    });
    return tag;
  } catch (error) {
    console.log('>> Error while finding Tag: ', error);
  }
};

// adding a tutorial to a tag
exports.addTutorial = async (tagId, tutorialId) => {
  try {
    const tag = await Tag.findByPk(tagId);
    if (!tag) {
      console.log('Tag not found');
      return null;
    }

    const tutorial = await Tutorial.findByPk(tutorialId);
    if (!tutorial) {
      console.log('Tutorial not found!');
      return null;
    }

    tag.addTutorial(tutorial);
    console.log(`>> added Tutorial id=${tutorial.id} to Tag id=${tag.id}`);
    return tag;
  } catch (error) {
    console.log('>> Error while adding Tutorial to Tag: ', err);
  }
};
