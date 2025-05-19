const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName:  { type: String, required: true },
  email:     { type: String, required: true, unique: true },
  password:  { type: String, required: true },
  date:      Date,
  sex:       { type: String, enum: ['M', 'H'], required: true },
  image:     String,
  role:      { type: String, enum: ['ADMIN', 'USER', 'GUEST'], default: 'USER' }
});

module.exports = mongoose.model('User', userSchema);
