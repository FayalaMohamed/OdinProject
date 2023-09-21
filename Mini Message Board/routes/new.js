const express = require('express');
const fs = require('fs');
const router = express.Router();

const messages = require('./../data/messages.json');

router.post('/', async function (req, res) {
  const author = req.body.author;
  const message = req.body.message;
  const newMessage = { author, message, date: (new Date).toLocaleString() };
  messages.push(newMessage);
  await fs.promises.writeFile('data/messages.json', JSON.stringify(messages));
  res.redirect('/');
});

router.get('/', function (req, res, next) {
  res.render('form');
});

module.exports = router;
