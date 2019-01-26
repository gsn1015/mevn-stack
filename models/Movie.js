var mongoose = require('mongoose');


var MovieSchema = new mongoose.Schema({
    director: String,
    title: String,
    summary: String,
    language: String,
    flash: String,
    poster: String,
    country: String,
    year: Number,
});


module.exports = mongoose.model('Movie', MovieSchema);
