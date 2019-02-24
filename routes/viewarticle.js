var express = require('express');
var router = express.Router();

const Company1 = require('../models/company1');


router.get('/', function(req, res, next) {
    var id=req.query.id;
    /*Post.find({}, (err, post) => {
        res.render('viewarticle', { post: post,id:id})
    });*/
    var post=Company1.find({_id:id});
    res.render('viewarticle', { post: post,id:id})
});

module.exports = router;

