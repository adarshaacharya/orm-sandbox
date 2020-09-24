const db = require('../models');
const Tutorial = db.tutorials;
const Comment = db.comments;

//  Create and Save new Tutorials
exports.createTutorial = async (tutorial) => {
  const { title, description } = tutorial;
  try {
    const tutorial = await Tutorial.create({
      title,
      description,
    });

    return tutorial;
  } catch (error) {
    console.log('>> Error while creating tutorial: ', err);
  }
};

//  Create and Save new Comments
exports.createComment = async (tutorialId, comment) => {
  const { name, text } = comment;
  try {
    const comment = await Comment.create({
      name,
      text,
      tutorialId,
    });

    return comment;
  } catch (error) {
    console.log('>> Error while creating comment: ', error);
  }
};

// Get the comments for a given tutorial
exports.findTutorialById = async (tutorialId) => {
  try {
    const tutorial = await Tutorial.findByPk(tutorialId, {
      include: ['comments'],
    });
    return tutorial;
  } catch (error) {
    console.log('>> Error while finding tutorial: ', error);
  }
};

//Get the comments for a given comment id
exports.findCommentbyId = async (id) => {
  try {
    const comment = await Comment.findByPk(id, { include: ['tutorial'] });
    return comment;
  } catch (error) {
    console.log('>> Error while finding comment: ', err);
  }
};

// get all tutorial includes comments
exports.findAll = async () => {
  try {
    const tutorials = await Tutorial.findAll({
      include: ['comments'],
    });

    return tutorials;
  } catch (error) {
    console.log(error);
  }
};
