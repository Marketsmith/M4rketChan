const { User } = require('../models/usersModel');
const { Item } = require('../models/usersModel');
const path = require('path');

const searchBarController = {};


searchBarController.populate = (req, res, next) => {
    const { selectedItem, selectedCity } = req.body;
    Item.find( { city: selectedCity, category: selectedItem })
      .then( (foundData) =>  {
        res.locals = foundData;
        return next();
      })
      .catch (error => {
        return next({
          log: `searchBarController.populate: Error: ${error}`,
          status: 400,
          message: 'searchBarController.populate middleware failed'
        });
      });
}

module.exports = {searchBarController};