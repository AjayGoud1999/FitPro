const mongoose = require("mongoose");
const serverless = require("serverless-http");
const express = require("express");
const cors = require("cors");
const routes = require('../routes/exerciseRoutes'); // Adjust path if necessary

const app = express();
const router = express.Router();

// MongoDB connection
const DB_URL = "mongodb+srv://FitProData:p4g97N2kToGGRjJd@cluster0.hckic.mongodb.net/Exercise?retryWrites=true";
mongoose.connect(DB_URL).then(() => {
    console.log("Database connected");
}).catch(err => {
    console.error(err);
});

// Middleware setup
app.use(cors()); // Apply CORS middleware globally
app.use(express.json());
app.use(express.static('public'));
// app.use('/uploads', express.static('uploads'));

// Define routes with the router
router.use('/backend', routes);

// Mount router
app.use('/.netlify/functions/app', router);

// Default route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Error handling middleware
app.use((error, req, res, next) => {
    res.status(500).json({ error: error.message });
});

// Export handler for Netlify
module.exports.handler = serverless(app);
