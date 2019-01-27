const Movie = require('../models/controllers/movie')

const User = require('../models/controllers/user')
module.exports = (app) => { 

    //movie
    app.get('/movie/list', Movie.list);

    //user
    app.post('/user/login', User.signin);
    app.post('/user/register', User.register);


}