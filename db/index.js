const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost/listings', { useNewUrlParser: true });

module.exports = db;