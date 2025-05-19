const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  content:   String,
  imageUrl:  String,
  user:      { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  recipe:    { type: mongoose.Schema.Types.ObjectId, ref: 'Recipe' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Comment', commentSchema);
