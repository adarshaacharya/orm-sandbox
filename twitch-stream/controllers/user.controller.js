const db = require('../models');
const User = db.users;

// create a new user
export const createUser = async (req, res) => {
  try {
    const { name, email, password, phoneNumber } = req.body;
    const user = await User.create({
      name,
      email,
      password,
      phoneNumber,
    });

    res.status(201).json({
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: 'Error in creating user',
    });
  }
};

// find user bypirmary key(id)
export const findUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findByPk(userId, {
      include: ['posts'],
    });

    if (!user) return res.json({ message: "User of given id doesn't exists" });

    res.status(201).json({
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: 'Error in finding user',
    });
  }
};

// delete user by id
export const deleteUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.destroy({
      where: {
        id: userId,
      },
    });

    if (!user) return res.json({ message: "User of given id doesn't exists" });

    res.status(201).json({
      msg: 'User successfully deleted',
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: 'Error in deleting user',
    });
  }
};

// get all users with their posts
export const getUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      include: ['posts'],
      attributes: { exclude: ['password'] }, // except password
    });
    res.status(201).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: 'Error in getting users.',
    });
  }
};
