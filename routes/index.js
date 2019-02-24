var express = require('express');
var router = express.Router();

const Company1 = require('../models/company1');


router.get('/', function(req, res, next) {
  Company1.find({}, (err, post) => {
    res.render('index', { post: post})
  });
});
/*<% for(let i = 0; i < post.length; i++) { %>
   <a id="<%=post[i]._id%>" href="viewarticle?id=<%=post[i]._id%>"><%= post[i].title %></a><br>
   <% } %>*/
module.exports = router;

