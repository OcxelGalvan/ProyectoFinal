const User = require('../models/user');

exports.getUsers = (req, res) => {
  User.find().then(users => res.json(users));
};

exports.getUserByEmail = (req, res) => {
  User.findOne({ email: req.params.email }).then(user => res.json(user));
};

exports.createUser = (req, res) => {
  const user = new User(req.body);
  user.save().then(u => res.status(201).json(u));
};

exports.updateUser = (req, res) => {
  User.findOneAndUpdate({ email: req.params.email }, req.body, { new: true })
    .then(user => res.json(user));
};

exports.deleteUser = (req, res) => {
  User.findOneAndDelete({ email: req.params.email }).then(user => {
    if (user) res.json({ message: 'Usuario eliminado' });
    else res.status(404).json({ message: 'No encontrado' });
  });
};
