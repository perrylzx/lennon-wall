// TODO: change to es6 syntax
var express = require('express');
var router = express.Router();
import { Wall } from '../db/models'

// Create wall
router.post('/create', async (req, res) => {
  const newWall = await Wall.create({ name: req.body.name })
  res.send(newWall)
});

// Retrieve wall
router.get('/retrieve', async (req, res, ) => {
  const wall = await Wall.findOne({
    where: {
      // name is the name from the wall model, req.params.wallName is what you pass in through the url
      name: req.query.wallName
    }
  })
  res.send(wall);
});

module.exports = router;
