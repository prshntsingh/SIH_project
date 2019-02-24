const mongoose = require('mongoose');

const Company1Schema = new mongoose.Schema({
    title: String,
    content: String
});

const Company1 = mongoose.model('company1', Company1Schema);

module.exports = Company1;