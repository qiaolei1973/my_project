var mongoose = require('mongoose')
// var bcrypt = require('bcrypt')

var SALT_WORK_FACTOR = 10;

var DataSchema = new mongoose.Schema({
    data1: String,
    data2: String,
    data3: String,
    year: Number,
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
})

DataSchema.pre('save', function (next) {
    var data = this
    if (this.isNew) {
        this.meta.createAt = this.meta.updateAt = Date.now()
    } else {
        this.meta.updateAt = Date.now()
    }

    // bcrypt.genSalt(SALT_WORK_FACTOR,function(err,salt){
    //     if(err)return next(err)

    //     bcrypt.hash(data.password,salt,function(err,hash){
    //         if(err) return next(err)

    //         data.password = hash
    //     })

    // });
    next();
})

DataSchema.statics = {
    fetch: function (cb) {
        return this
            .find({})
            .sort('meta.updateAt')
            .exec(cb);
    },

    findById: function (id,cb) {
        return this
            .find({})
            .sort('meta.updateAt')
            .exec(cb);
    }
}

module.exports = DataSchema;