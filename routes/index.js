var express = require('express');
var router = express.Router();
const userModel = require("./users")

router.get('/', function(req, res, next) {
  res.render('home', { title: 'Express' });
});

router.use((err, req, res, next) => {
  res.send("something gone bad.")
})

module.exports = router;
