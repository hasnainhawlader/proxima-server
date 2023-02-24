const express = require("express");
require("dotenv").config();
const cors = require("cors");

const projectRoutes = require("./routes/projectRoute");

const userRoute = require("./routes/userRoute");

const mongoose = require("mongoose");

// express app
const app = express();

//port

const port = process.env.PORT || 5000;

//middleware\
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  next();
});

// routes

app.use("/api/projects", projectRoutes);

app.use("/api/user", userRoute);

//mongodb
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    //listen for request
    app.listen(4000, () => {
      console.log(`Mongodb connnected and listening to port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
