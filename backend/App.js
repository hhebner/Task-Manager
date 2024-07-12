const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

//Load environment variables from the .env file into process.env
dotenv.config();

//Intializing express application 
const app = express();

//Connecting to the MongoDB database using the connection string stored in the environment variable MONGO_URI
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

//express JSON middleware to parse JSON request bodies
app.use(express.json());

//Defining routes for the app
app.use('/api/tasks', require('./routes/tasks'));

//Defining port number for server to listen on and starting the express server to listen for incoming requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));