const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title:       { type: String, required: true },
  ingredients: [String],
  steps:       [String],
  tips:        String,
  presentation: String,
  difficulty:  { type: String, enum: ['Baja', 'Media', 'Alta'] },
  prepTime:    Number,
  cookTime:    Number,
  images:      [String],
  createdBy:   { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Recipe', recipeSchema);
