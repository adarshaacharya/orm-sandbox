const db = require('./models');
const TutorialController = require('./controllers/tutorial.controller');
const TagController = require('./controllers/tag.controller');

const run = async () => {
  //Create Tutorials
  const tut1 = await TutorialController.create({
    title: 'Tut#1',
    description: 'Tut#1 Description',
  });
  const tut2 = await TutorialController.create({
    title: 'Tut#2',
    description: 'Tut#2 Description',
  });

  const tut3 = await TutorialController.create({
    title: 'Tut#3',
    description: 'Tut#3 Description',
  });

  const tut4 = await TutorialController.create({
    title: 'Tut#4',
    description: 'Tut#4 Description',
  });

  //Create Tags
  const tag1 = await TagController.create({
    name: 'Tag#1',
  });
  /*
    >> Created Tag: {
    "id": 1,
    "name": "Tag#1",
    "updatedAt": "2020-04-24T03:27:53.923Z",
    "createdAt": "2020-04-24T03:27:53.923Z"
    }
*/

  const tag2 = await TagController.create({
    name: 'Tag#2',
  });

  //Add Tutorials to Tags
  await TagController.addTutorial(tag1.id, tut1.id);
  // >> added Tutorial id=1 to Tag id=1

  await TagController.addTutorial(tag1.id, tut2.id);

  await TagController.addTutorial(tag1.id, tut3.id);

  await TagController.addTutorial(tag2.id, tut3.id);

  await TagController.addTutorial(tag2.id, tut4.id);

  await TagController.addTutorial(tag2.id, tut1.id);

  //   Show Tag (including Tutorials) by id
  const _tag1 = await TagController.findById(tag1.id);
  console.log('>> tag1', JSON.stringify(_tag1, null, 2));

  // show all tags
  const tags = await TagController.findAll();
  console.log('>> tags', JSON.stringify(tags, null, 2));

  // show tutorials(including tags ) by id
  const _tut = await TutorialController.findById(tut3.id);
  console.log('>> tut3', JSON.stringify(_tut, null, 2));

  // show all tags
  const tuts = await TutorialController.findAll();
  console.log('>> tuts', JSON.stringify(tuts, null, 2));
};

// db.sequelize.sync();
db.sequelize.sync({ force: true }).then(() => {
  console.log('Drop and re-sync db.');
  run();
});
