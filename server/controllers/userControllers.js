const { User } = require('../models/usersModel');
const path = require('path');

const userController = {};

userController.login = (req, res, next) => {
  const { username, password } = req.body;
  
  if (!username || !password) {
    return next({
      log: 'props not passed into userController.login',
      message: 'props not passed into userController.login'
    });
  }

  User.find({ username, password })
    .then(data => {
      if (data.length) {
        res.locals.success = true;
        res.locals.user = data[0];
        res.locals.userID = data[0]._id; 
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

module.exports = userController;