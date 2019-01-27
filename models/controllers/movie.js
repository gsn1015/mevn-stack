const Movie = require('../schemas/movie')
const path = require('path')


//list page
exports.list = (req, res) => {
  Movie.fetch((err, movies) => {
    if (err) {
      console.log(err)
    }
    res.json({"data": movies});
  })
}

//list delete movie  

exports.del = (req, res) => {
  let id = req.query.id
  if (id) {
    Movie.deleteOne({ _id: id }, (err, movie) => {
      if (err) {
        console(err)
      }
      else {
        res.json({ success: 1 })
      }
    })
  }
}
