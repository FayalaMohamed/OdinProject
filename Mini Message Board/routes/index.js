const express = require('express');
const router = express.Router();

const messages = require('./../data/messages.json');

/* const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
]; */

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Messages', messages: messages });
});

router.post('/', function (req, res) {
  res.redirect('/new');
});

module.exports = router;
