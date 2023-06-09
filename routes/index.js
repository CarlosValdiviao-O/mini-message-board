var express = require('express');
var router = express.Router();

//let messages = [
  //{
  //  text: "Hi there!",
  //  user: "Amando",
  //  added: new Date('2023-05-16T03:46:34.572Z').toDateString()
  //},
  //{
  //  text: "Hello World!",
  //  user: "Charles",
  //  added: new Date('2023-05-16T03:46:34.572Z').toDateString()
  //}
//];

const Message = require("../models/message");

router.get('/', async function(req, res, next) {
  const messages = await Message.find().exec();
  if (messages.length >= 50) {
    await Message.deleteOne({_id: messages[0]._id})
  }
  let newArr = [];
  messages.map(val => {newArr.push(val)});
  res.render('index', { title: "Mini Messageboard", messages: newArr.reverse() });
});

router.get('/new', function(req, res, next) {
  res.render('form');
});

router.post('/new', async function(req, res, next) {
  let message = req.body;
  const mess = new Message({text: message.message, user: message.user, added: new Date().toDateString()});
  await mess.save();
  //messages.push({text: message.message, user: message.user, added: new Date().toDateString()})
  res.redirect('/');
})

module.exports = router;
