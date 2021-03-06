const express = require("express");
const PORT = process.env.PORT || 4000;
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
const btoa = require('btoa');
require('dotenv').config();
// const $ = require("jquery");

const mongoose = require("mongoose");
const config = require("./config/db");

const app = express();

//configure database and mongoose
mongoose.set("useCreateIndex", true);
mongoose.set('useFindAndModify', false);
mongoose.set('useUnifiedTopology', true);

mongoose
  .connect(config.database, { useNewUrlParser: true })
  .then(() => {
    console.log("Database is connected");
  })
  .catch(err => {
    console.log({ database_error: err });
  });
// db configuaration ends here
//registering cors

app.use(cors());


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan("dev")); // configire morgan

app.get("/", (req, res) => {

  res.send(JSON.stringify({ Hello: 'medddaeeen solider'}));


});

const userRoutes = require("./api/user/route/user"); //bring in our user routes
app.use("/user", userRoutes);

const productRoutes = require("./api/product/route/product"); //bring in our product routes
app.use("/product", productRoutes);

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});





