const { User } = require('../models/usersModel');
const { Item } = require('../models/usersModel');
const { Review } = require('../models/usersModel');
const path = require('path');

const searchBarController = {};

searchBarController.populate = (req, res, next) => {
  const { selectedItem, selectedCity } = req.body;
  Item.find({ city: selectedCity, category: selectedItem })
    .then((foundData) => {
      res.locals = foundData;
      return next();
    })
    .catch((error) => {
      return next({
        log: `searchBarController.populate: Error: ${error}`,
        status: 400,
        message: 'searchBarController.populate middleware failed',
      });
    });
};

searchBarController.getItems = async (req, res, next) => {
  try {
    const allItems = await Item.find({});
    res.locals.items = allItems;

    return next();
  } catch (err) {
    return next({
      err,
      message: 'Error retrieving all items from the database',
      log: 'Error in searchBarController.getItems',
    });
  }
};

searchBarController.getNewItems = async (req, res, next) => {
  try {
    const newItems = await Item.find().sort({ picture: -1 }).limit(5);
    console.log(newItems);
    res.locals.newItems = newItems;

    return next();
  } catch (err) {
    return next({
      err,
      message: 'Error retrieving newest items from the database',
      log: 'Error in searchBarController.getNewItems',
    });
  }
};

module.exports = { searchBarController };
