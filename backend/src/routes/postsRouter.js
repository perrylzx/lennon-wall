// TODO: change to es6 syntax
var express = require('express');
var router = express.Router();
import { Post, Wall } from '../db/models'

// Create post
router.post('/create', async (req, res) => {
  //waits for this code block to run finish before executing
  const [newPost, associatedWall] = await Promise.all([
    Post.create({ content: req.body.content }),
    Wall.findByPk(req.body.wallId)
  ]);
  //this line
  await newPost.setWall(associatedWall);
  res.send(newPost);
});

// Retrieve posts
router.get('/retrieve', async (req, res) => {
  const posts = await Post.findAll({
    where: {
      WallId: req.body.wallId
    }
  });
  res.send(posts);
});

module.exports = router;


