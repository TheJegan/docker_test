var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var containerName = process.env.containerName || "purpose env var not  specified";
  res.render('index', { title: 'Jegan\'s Docker Test Success containerPurpose: ' + containerName });
});

module.exports = router;
