const mongoose = require("mongoose");
// const MONGO_URI =
// "mongodb+srv://gmogi92:basketball123@cluster0.jtsrl7y.mongodb.net/"

// mongoose
//   .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("Connected to Mongo DB."))
//   .catch((err) => console.log(err));

const Schema = mongoose.Schema;

const sessionSchema = new Schema({
  cookieID: { type: String, required: true, unique: true },
  createdAt: { type: String, expires: 1, default: Date.now() },
});

const Session = mongoose.model("sessions", sessionSchema);

module.exports = {
  Session,
};
