const express = require("express");
const path = require("path");
const {
  userController,
  itemController,
} = require("./controllers/userControllers.js");
const {
  searchBarController,
} = require("./controllers/searchBarControllers.js");
const { sessionController } = require("./controllers/sessionController");
const expressPino = require("express-pino-logger");
const cookieParser = require("cookie-parser");
const cors = require('cors');



const app = express();
app.use(cookieParser());

const PORT = 3000;

app.use(
  expressPino({
    level: "info",
    enabled: true,
    transport: {
      target: "pino-pretty",
      options: {
        colorize: true,
      },
    },
  })
);

// Enable CORS for all routes to make sure we don't get cross server errors
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

app.get("*", (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, "../public/index.html"));
});

//route for posting an item for sale, runs middleware then currently redirects to /search page
app.post("/sellItem", itemController.createItemListing, (req, res) => {
  // return res.redirect(303, "/searchBar");
  return res.status(303);
});

app.post("/login", userController.login, (req, res) => {
  if (res.locals.success) return res.status(200).json(res.locals.user);
  else return res.status(200).json({});
});

app.post("/login", userController.login, (req, res) => {
  return res.status(200).json(res.locals.user);
});

app.post("/signup", userController.signUp, (req, res) => {
  if (res.locals.success) return res.status(200).json(res.locals.user);
  else return res.status(200).json({});
});

//route for fetch get request from searchbar to populate on buttonclick to fetch items with that specific city and item category (useEffect)

// app.get('/itemsByCity', searchBarController.populate, (req, res) => {

// });

// app.post("/upload", userController.upload, (req, res) => {
//   return res.status(200).json({});
// });

app.post("/itemsByCity", searchBarController.populate, (req, res) => {
  return res.status(200).json(res.locals);
});

app.post("/upload", itemController.uploadImage, (req, res) => {
  return res.status(200).json({});
});

app.get("/listings", userController.getListings, (req, res) => {
  return res.status(200).json(res.locals.listings);
});

// Unknown route handler
app.use((req, res) => res.sendStatus(404));

// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 500,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log, err);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));

// app.get('/api/homebase', (req, res) => {
//   res.status(200).json(true)

// });

// app.get('/login', userController.login, (req, res) => {
//   res.status(200).json(res.locals.success)
// });

// app.get("/api/home", sessionController.isLoggedIn, (req, res) => {
//   console.log(res.locals.isLoggedIn, "in the controller");
//   return res.send(res.locals.isLoggedIn);
// });

// app.get('/listings', sessionController.isLoggedIn, userController.getListings, (req, res) => {
//   return res.status(200).json(res.locals.listings)
// })
