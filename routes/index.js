var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('home');
});

router.use((err, req, res, next) => {
  res.send("something gone bad.")
})

module.exports = router;
