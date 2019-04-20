const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();
const expressValidator = require("express-validator");
const mongoose = require("mongoose");
//app initialization
const app = express();

//database connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => console.log("database connected"));
mongoose.connection.on("error", err =>
  console.log(`database connection feild ${err}`)
);
//routes
const postRoutes = require("./routes/post");
const authRoutes = require("./routes/auth");
//middleware
app.use(morgan("dev"));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(expressValidator());
app.use("/api/v1", postRoutes);
app.use("/api/v1", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server running on http://locahost${PORT}`));
