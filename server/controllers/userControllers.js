const { User } = require('../models/usersModel');
const { Item } = require('../models/usersModel');
const path = require('path');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

const cloudinary = require('cloudinary').v2;
cloudinary.config({
  cloud_name: 'dlxfkrk48',
  api_key: '374659647111771',
  api_secret: 'd_3n7CUCzkxNfibszUer0UrxR2Y',
  secure: true,
});

const itemController = {};
const userController = {};

userController.login = async (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return next({
      log: 'props not passed into userController.login',
      message: 'props not passed into userController.login',
    });
  }

  try {
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      res.locals.user = existingUser;

      const hashedPassword = await bcrypt.compare(password, res.locals.user.password);

      if (hashedPassword) {
        res.locals.success = true;
        return next();
      } else {
        res.locals.success = false;
        return next();
      }
    } else {
      res.locals.success = false;
      return next();
    }
  } catch (err) {
    return next({
      err,
      message: 'login failed: error in userController.login',
      log: 'login failed: error in userController.login',
    });
  }
};

userController.signUp = async (req, res, next) => {
  const { username, password } = req.body;
  res.locals.success = true;

  if (!username || !password) {
    res.locals.success = false;
    return next({
      log: 'props not passed into userController.signUp',
      message: 'props not passed into userController.signUp',
    });
  }
  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      res.locals.success = false;
      res.locals.exists = true;
      return next({
        log: 'username already exists, userController.signUp failed',
        message: 'username already exists, userController.signUp failed',
      });
    }
    const newUser = await User.create({ username, password });
    res.locals.user = newUser;
    return next();
  } catch (err) {
    res.locals.success = false;
    return next({
      err,
      message: 'signup failed: error creating account in userController.signUp',
      log: 'signup failed: error creating account in userController.signUp',
    });
  }
};

userController.getUsers = async (req, res, next) => {
  try {
    const allUsers = await User.find({});
    res.locals.users = allUsers;

    return next();
  } catch (err) {
    return next({
      err,
      message: 'Error retrieving all users from the database',
      log: 'Error in userController.getUsers',
    });
  }
};

itemController.createItemListing = async (req, res, next) => {
  const { user, name, date, description, category, city, picture, price } = req.body;
  const newItem = {
    user,
    name,
    date,
    description,
    category,
    city,
    picture,
    price,
  };
  try {
    await Item.create({ newItem });
    return next();
  } catch (err) {
    console.error(err);
    return next({
      status: 400,
      log: 'createItemListing did not work',
      message: 'could not post item',
    });
  }
};

itemController.uploadImage = async (req, res, next) => {
  const { title, desc, image } = req.body;

  return next();

  // const uploadImage = async (imagePath) => {

  //   // Use the uploaded file's name as the asset's public ID and
  //   // allow overwriting the asset with new versions
  //   const options = {
  //     use_filename: true,
  //     unique_filename: false,
  //     overwrite: true,
  //   };

  //   try {
  //     // Upload the image
  //     const result = await cloudinary.uploader.upload(imagePath, options);
  //     console.log(result);
  //     return result.public_id;
  //   } catch (error) {
  //     console.error(error);
  //   }

  // };

  // uploadImage(image)
  //   .then(response => {
  //     return next()
  //   });
};

userController.getListings = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const listingInfo = await User.findOne({ username }).populate('items');
    res.locals.listing = listingInfo;
    return next();
  } catch {
    return next({
      status: 400,
      log: 'getListings did not work',
      message: 'could not display listings',
    });
  }
};

userController.placeBid = async (req, res, next) => {
  const { amount, itemName } = req.body;
  try {
    const item = await Item.findOne({ itemName });
    if (amount > item.currentBid) {
      item.currentBid = amount;
      await item.save();
      res.locals.success = true;
      return next();
    } else {
      res.locals.success = false;
      await item.save();
      return next();
    }
  }
  catch {
    return next({
      status: 400,
      log: 'Failed during placeBids',
      message: 'Error during placeBid middleware.'
    })
  }
}

module.exports = {
  userController,
  itemController,
};
