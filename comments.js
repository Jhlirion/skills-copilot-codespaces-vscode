// Create web server
// Create an API endpoint that will return all comments in the database
// Create an API endpoint that will return a specific comment by the ID
// Create an API endpoint that will create a new comment
// Create an API endpoint that will update a comment by the ID
// Create an API endpoint that will delete a comment by the ID

const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');

// GET all comments
router.get('/', async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (err) {
    res.json({ message: err });
  }
});

// GET a specific comment
router.get('/:commentId', async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.commentId);
    res.json(comment);
  } catch (err) {
    res.json({ message: err });
  }
});

// POST a new comment
router.post('/', async (req, res) => {
  const comment = new Comment({