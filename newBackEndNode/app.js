const mongoose = require('mongoose');
const express = require("express");
const authRoutes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');
const { verifyTokenAuth } = require('./middleware/auth');
const app = express();

// middleware
app.use(express.json());
app.use(cookieParser());
app.set('view engine', 'ejs');
// database connection
const dbURI = 'mongodb+srv://baha:1234@cluster0.buphdwp.mongodb.net/EduCare';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));
  app.use(authRoutes);
