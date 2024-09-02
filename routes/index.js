var express = require('express');
var router = express.Router();
const userModel = require("./users")

router.get('/', function(req, res, next) {
  res.render('home', { title: 'Express' });
});

router.get('/create', async function(req, res, next) {
  const createdUser = await userModel.create({
    email: "thebotcmd@gmail.com",
    password: "Sachin@123"
  })
  res.send(createdUser)
});

router.get('/get', async function(req, res, next) {
  const getUser = await userModel.find({
    email: "thebotcmd@gmail.com",
    password: "Sachin@123"
  })
  res.send(getUser)
});

router.get('/delete', async function(req, res, next) {
  const deletedUser = await userModel.findOneAndDelete({
    email: "thebotcmd@gmail.com"
  })
  res.send(deletedUser)
});

router.use((err, req, res, next) => {
  res.send("something gone bad.")
})

module.exports = router;
