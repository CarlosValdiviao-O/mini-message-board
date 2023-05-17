var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date('2023-05-16T03:46:34.572Z').toDateString()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date('2023-05-16T03:46:34.572Z').toDateString()
  }
];

router.get('/', function(req, res, next) {
  res.render('index', { title: "Mini Messageboard", messages: messages.reverse() });
});

router.get('/new', function(req, res, next) {
  res.render('form');
});

router.post('/new', function(req, res, next) {
  let message = req.body;
  messages.push({text: message.message, user: message.user, added: new Date().toDateString()})
  res.redirect('/');
})

module.exports = router;
