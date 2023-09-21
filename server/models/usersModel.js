const mongoose = require('mongoose');
const MONGO_URI = 'mongodb+srv://gmogi92:basketball123@cluster0.jtsrl7y.mongodb.net/';

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

const Schema = mongoose.Schema;

const itemSchema = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  name: { type: String, required: true },
  date: { type: String, default: Date.now() },
  description: { type: String, default: '' },
  city: { type: String, required: true },
  category: { type: String, required: true },
  address: { type: String },
  picture: { type: String },
  price: { type: Number },
  currentBid: { type: Number, default: 0 }
});

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  items: [{
    name: { type: String },
    date: { type: String, default: Date.now() },
    description: { type: String, default: '' },
    city: { type: String, required: true },
    picture: { type: String },
    price: { type: Number },
  },],
  level :  { type: Number, default: 1 },
  xp : { type: Number, default: 0 }, 
});

const SALT_WORK_FACTOR = 10;
const bcrypt = require('bcryptjs');

userSchema.pre('save', function (next) {
  bcrypt.hash(this.password, SALT_WORK_FACTOR, (err, hash) => {
    if (err) return next(err);
    this.password = hash;
    return next();
  });
});

const Item = mongoose.model('Item', itemSchema);
const User = mongoose.model('User', userSchema);

const cities = ['Los Angeles', 'Seattle'];
const categories = ['furniture', 'electronics'];

module.exports = {
  Item,
  User,
};
