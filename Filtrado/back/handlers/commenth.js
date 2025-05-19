const Comment = require('../models/comment');

exports.getCommentsByRecipe = (req, res) => {
  Comment.find({ recipe: req.params.recipeId }).populate('user', 'firstName').then(c => res.json(c));
};

exports.createComment = (req, res) => {
  const comment = new Comment({ ...req.body, user: req.userId });
  comment.save().then(c => res.status(201).json(c));
};
