var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser');
var mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var profileRouter = require('./routes/profile');
var createpostRouter = require('./routes/createpost');
var viewarticleRouter = require('./routes/viewarticle');

var app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


mongoose.connect('mongodb://localhost/blog', { useNewUrlParser: true })
    .then(() => console.log('You are now connected to Mongo!'))
    .catch(err => console.error('Something went wrong', err))
mongoose.Promise = global.Promise;

app.use('/', indexRouter);
app.use('/profile', profileRouter);
app.use('/createpost', createpostRouter);
app.use('/viewarticle', viewarticleRouter);

const Post = require('./models/post');
const Company1 = require('./models/company1');



app.get('/profile', (req, res,next) => {
  var post = Post.find(req.body)
  res.render('profile', {post: post  })

});

app.get('/', (req, res,next) => {
  var post = Company1.find(req.body)
  res.render('index', {post: post  })

});
//var ObjectID = require('mongodb').ObjectID;
app.get('/viewarticle/:id', (req, res,next) => {
  var id=req.params.id;
  Company1.findById(req.params.id, function(err,post){
    if(post==null)
    {Post.findById(req.params.id, function(err,post){
      console.log(post);
      res.render('viewarticle', {post:post})
    });}
    else {
      console.log(post);
      res.render('viewarticle', {post: post})
    }
  });

});

app.post('/', (req, res,next) => {
  Company1.create(req.body);
  Post.create(req.body, (error, post) => {
    res.redirect('/profile')
  })
});



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
//ECHO is on.
