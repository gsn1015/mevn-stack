const User = require('../schemas/user')
const path = require('path')


//list page
exports.signin = (req, res) => {
    let _user = req.body;
    let name = _user.name;
    let password = _user.password
    User.findOne({ name: name }, (err, user) => {
      if (err) {
        console.log(err)
      }
      if (!user) {
        res.json({ data: "no user" });
      }
      user.comparePassword(password, (err, isMatch) => {
        if (err) {
          console.log(err)
        }
        if (isMatch) {
            res.json({ data: "Password matched!" })
        } else {
            res.json({ data: "Password is not matched!" })
        }
      })
    })
  }



  exports.register = (req, res) => {
    let _user = req.body;
    User.findOne({ name: _user.name }, (err, user) => {
      if (err) {
        console.log(err)
      }
      if (user) {
        res.json({ data: "go to signIn!" })
      } else {
        let user = new User(_user)
        user.save((err, user) => {
          if (err) {
            console.log(err)
          }
          res.json({ data: "register success" })
        })
      }
    })
  }

