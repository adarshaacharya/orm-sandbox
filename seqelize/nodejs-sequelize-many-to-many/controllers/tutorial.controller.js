const db = require('../models');
const Tutorial = db.tutorial;
const Tag = db.tag;

//Create and Save new Tutorial
exports.create = async (tutorial) => {
  const { title, description } = tutorial;
  try {
    const tutorial = await Tutorial.create({
      title,
      description,
    });

    console.log('>> Created Tutorial: ' + JSON.stringify(tutorial, null, 4));
    return tutorial;
  } catch (error) {
    console.log('>> Error while creating Tutorial: ', error);
  }
};

//Retrieve all Tutorials
exports.findAll = async () => {
  try {
    const tutorials = await Tutorial.findAll({
      include: [
        {
          model: Tag,
          as: 'tags', // for eager loading we have to pass the as : "alias"
          attributes: ['id', 'name'],
          through: {
            attributes: [],
          },
        },
      ],
    });

    return tutorials;
  } catch (error) {
    console.log('>> Error while retrieving Tutorials: ', error);
  }
};

//Get the Tutorial for a given tutorial id

exports.findById = async (id) => {
  try {
    const tutorial = await Tutorial.findbyPk(id, {
      include: [
        {
          model: Tag,
          as: 'tags',
          attributes: ['id', 'name'],
          through: {
            attributes: [],
          },
          // through: {
          //   attributes: ["tag_id", "tutorial_id"],
          // },
        },
      ],
    });

    return tutorial;
  } catch (error) {}
};
