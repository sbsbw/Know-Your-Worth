const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

mongoose.connect('Do later', {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Create a simple schema for your MongoDB documents
const WordSchema = new mongoose.Schema({
    word: String,
  });

const WordModel = mongoose.model('Word', WordSchema);

app.post('/search', async (req, res) => {
    const userInput = req.body.userInput;
  
    try {
      // Use a regex to find words similar to the user input
      const regex = new RegExp(userInput, 'i');
      const result = await WordModel.find({ word: regex });
  
      res.json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });