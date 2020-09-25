const db = require('../models');
const User = db.users;

// create a new user
export const CreateUser = async (req, res) => {
  try {
    const { name, email, password, phoneNumber } = req.body;
    const user = await User.create({
      name,
      email,
      password,
      phoneNumber,
    });

    res.status(201).json({ user });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: 'Error in creating user',
    });
  }
};
