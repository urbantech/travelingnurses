const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  bio: String,
  // ... other fields
});

// Hash password before saving
userSchema.pre('save', function(next) {
  const user = this;
  if (!user.isModified('password')) return next();
  
  bcrypt.hash(user.password, 10, (err, hash) => {
    if (err) return next(err);
    user.password = hash;
    next();
  });
});

module.exports = mongoose.model('User', userSchema);

