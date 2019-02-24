const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: String,
    content: String
});

const Post = mongoose.model('article', PostSchema);

module.exports = Post;