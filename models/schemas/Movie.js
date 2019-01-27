var mongoose = require('mongoose');


var movieSchema = new mongoose.Schema({
    director: String,
    title: String,
    summary: String,
    language: String,
    flash: String,
    poster: String,
    country: String,
    year: Number,
});

movieSchema.statics = {
    fetch: function(cb) {
      return this
        .find({})
        .exec(cb)
    }
  }

module.exports = mongoose.model('Movie', movieSchema);
