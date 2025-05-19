const Recipe = require('../models/recipe');

exports.getRecipes = (req, res) => {
  Recipe.find().populate('createdBy', 'firstName email').then(r => res.json(r));
};

exports.getRecipeById = (req, res) => {
  Recipe.findById(req.params.id).then(r => r ? res.json(r) : res.status(404).json({ msg: 'No encontrada' }));
};

exports.createRecipe = (req, res) => {
  const recipe = new Recipe({ ...req.body, createdBy: req.userId });
  recipe.save().then(r => res.status(201).json(r));
};

exports.updateRecipe = (req, res) => {
  Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(r => res.json(r));
};

exports.deleteRecipe = (req, res) => {
  Recipe.findByIdAndDelete(req.params.id).then(() => res.status(204).send());
};
