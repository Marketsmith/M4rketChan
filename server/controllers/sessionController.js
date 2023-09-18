const { Session } = require("../models/sessionModel");

const sessionController = {};

sessionController.setSSIDCookie = async (req, res, next) => {
  if (res.locals.success) {
    const { _id } = res.locals.user;
    console.log("id set cookie", _id);
    try {
      res.cookie("ssid", _id);
      res.locals.sessionID = _id;
      return next();
    } catch (err) {
      return next({
        log: "props not passed into setCookie.login",
        message: "props not passed into setCookie.login",
      });
    }
  }
  return next();
};

sessionController.startSession = async (req, res, next) => {
  if (res.locals.success) {
    const { _id } = res.locals.user;
    console.log("res locals users", res.locals.user);
    try {
      //create a session with cookieID
      const sessiondata = await Session.create({ cookieID: _id });
      console.log(sessiondata);
      res.locals.sessionID = _id;
      //invoke middleware
      return next();
    } catch (err) {
      console.log(err);
      return next({
        log: "props not passed into startsession.login",
        message: "props not passed into startsession.login",
      });
    }
  }
  return next();
};

sessionController.isLoggedIn = async (req, res, next) => {
  const isLoggedIn = req.cookies && req.cookies.ssid;
  console.log(req.cookies, "hi", "isLoggedIn", isLoggedIn);
  if (!isLoggedIn) {
    console.log("is false");
    res.locals.isLoggedIn = false;
    return next();
  } else {
    try {
      const { ssid } = req.cookies;
      const sessioninfo = await Session.findOne({ cookieID: ssid });
      console.log("session info", sessioninfo);
      if (sessioninfo.cookieID) {
        res.locals.isLoggedin = true;
      } else {
        res.locals.isLoggedin = false;
      }

      return next();
    } catch (err) {
      return next({
        log: "props not passed into isLoggedin.login",
        message: "props not passed into isLoggedin.login",
      });
    }
  }
};

module.exports = { sessionController };
