const mongoose = require('mongoose');
const uri = "mongodb+srv://connorkeyes:D36U8CGSL5maEh9h@cluster0.volzs1e.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));

const Schema = mongoose.Schema;

const itemSchema = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  name: { type: String, required: true },
  date: { type: Number, default: Date.now() },
  description: { type: String, default: '' },
  picture: { type: String }
});

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String },
  items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item' }]
});

const SALT_WORK_FACTOR = 10;
const bcrypt = require('bcryptjs');

userSchema.pre('save', function(next) {
  bcrypt.hash(this.password, SALT_WORK_FACTOR, (err, hash) => {
    if (err) return next(err);
    this.password = hash;
    return next();
  })
})

const Item = mongoose.Schema('Item', itemSchema);
const User = mongoose.Schema('User', userSchema);

module.exports = {
  Item,
  User
}