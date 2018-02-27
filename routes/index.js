var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var containerName = process.env.containerName || "no container";
  res.render('index', { title: 'Jegan\'s Docker Test containerPurpose: ' + containerName });
});

module.exports = router;
