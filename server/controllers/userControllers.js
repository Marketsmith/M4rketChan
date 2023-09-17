const { User } = require('../models/usersModel');
const { Item } = require('../models/usersModel');
const path = require('path');
const itemController = {};
const userController = {};

userController.login = (req, res, next) => {
  const { username, password } = req.body;
  
  if (!username || !password) {
    return next({
      log: 'props not passed into userController.login',
      message: 'props not passed into userController.login'
    });
  }

  User.findOne({ username })
    .then(data => {
      if (data.length) {
        res.locals.user = data[0];
        bcrypt
          .compare(password, res.locals.user.password)
          .then(result => {
            if (result) res.locals.success = true;
          })
          .catch(err => {
            return next({
              err,
              log: 'userController.login: bcrypt error',
              message: 'userController.login: bcrypt error'
            });
          });
      }
      return next();
    })
    .catch(err => {
      return next({
        err,
        message: 'login failed: error in userController.login',
        log: 'login failed: error in userController.login'
      });
    });
};

userController.signUp = (req, res, next) => {
  const { username, password } = req.body;
  
  res.locals.success = true;

  if (!username || !password) {
    res.locals.success = false;
    return next({
      log: 'props not passed into userController.signUp',
      message: 'props not passed into userController.signUp'
    });
  }

  User.find({ username })
    .then(data => {
      if (data.length) { 
        res.locals.success = false;
        return next({
          log: 'username already exists, userController.signUp failed',
          message: 'username already exists, userController.signUp failed'
        });
      }
    })
    .catch(err => {
      res.locals.success = false;
      return next({
        err,
        message: 'signup failed: error in finding username in userController.signUp',
        log: 'signup failed: error in finding username in userController.signUp'
      });
    });
  
  if (res.locals.success) {
    User.create({ username, password })
      .then(data => {
        res.locals.user = data[0];
        res.locals.success = true;
        console.log(`User ${username} successfully created!`);
        return next();
      })
      .catch(err => {
        res.locals.success = false;
        return next({
          err,
          message: 'signup failed: error creating account in userController.signUp',
          log: 'signup failed: error creating account in userController.signUp'
        });
      });
  }

};

itemController.createItemListing = (req, res, next) => {
  const newItem = req.body;
  console.log('the request body is');
  console.log(newItem)
  Item.create(newItem)
    .then((info)=>{
      return next();
    })
    .catch((err) => {
      console.error(err);
      return next({
        status: 400,
        log: 'createItemListing did not work',
        message: 'could not post item',
      });
    });
}

module.exports = userController;