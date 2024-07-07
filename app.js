
const mongoose = require("mongoose");
let DB_URL = `mongodb+srv://FitProData:p4g97N2kToGGRjJd@cluster0.hckic.mongodb.net/Exercise?retryWrites=true`

const express = require("express");
const app = express();
const cors = require("cors");


app.use(express.static('public')); 
app.use('/uploads', express.static('uploads')); 

mongoose.connect(DB_URL).then(()=> {
    console.log("Database connected")
    app.listen(3001);
}).catch(err => {
    // console.log(err);
});
app.use(cors());
app.use(express.json());

const routes = require('./routes/exerciseRoutes');

app.use('/backend', routes); 
app.use((error, req, res, next) => {
  res.status(500).json({ error: error.message });
});

module.exports = app;







