var mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const SALT_WORK_FACTOR = 10
var userSchema = new mongoose.Schema({
    name: {
        unique: true,
        type: String
    },
    password: String,
    role: {
        type: Number,
        default: 0
    },
    meta: {
        createAt: {
            type: Date,
            default: Date.now()
        },
        updateAt: {
            type: Date,
            default: Date.now()
        }
    }
});


userSchema.pre('save', function (next) {
    let user = this
    console.log(this,"this");
    if (this.isNew) {
        this.meta.createAt = this.meta.updateAt = Date.now()
    } else {
        this.meta.updateAt = Date.now()
    }
    bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
        if (err) {
        return next(err)
        }
        bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) {
            return next(err)
        }
        user.password = hash
        next()
        })
    })
})

userSchema.methods = {
    comparePassword: function (_password, cb) {

        console.log("_password: ", _password);
        console.log("password: ", this.password);

        bcrypt.compare(_password, this.password, function (err, isMath) {

            console.log("err:", err);
            console.log("isMath:", isMath);

        if (err) {
            return cb(err)
        }
        cb(null, isMath)
        })
    }
}

module.exports = mongoose.model('User', userSchema);
