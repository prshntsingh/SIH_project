var express = require('express');
var router = express.Router();
//var cosmic = require('cosmicjs');
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('createpost', { title: 'Create Post' });
});

module.exports = router;

