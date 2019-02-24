var express = require('express');
var router = express.Router();

const Post = require('../models/post');


router.get('/', function(req, res, next) {
  Post.find({}, (err, post) => {
    res.render('profile', { post: post})
  });
});
/*<% for(let i = 0; i < post.length; i++) { %>
    <a id="<%=post[i]._id%>" href="viewarticle?id=<%=post[i]._id%>"><%= post[i].title %></a><br>
<% } %>*/
module.exports = router;

