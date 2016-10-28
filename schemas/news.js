var mongoose = require('mongoose')

var NewsSchema = new mongoose.Schema({
    title: {
        unique: true,
        type: String
    },
    article: {
        unique: false,
        type: String
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
})

NewsSchema.pre('save', function (next) {
    if (this.isNew) {
        this.meta.createAt = this.meta.updateAt = Date.now()
    } else {
        this.meta.updateAt = Date.now()
    }
    console.log('news:'+ this)
    next();
})

NewsSchema.statics = {
    fetch: function (cb) {
        return this
            .find({})
            .sort('meta.updateAt')
            .exec(cb);
    },

    findById: function (id, cb) {
        return this
            .find({})
            .sort('meta.updateAt')
            .exec(cb);
    }
}

module.exports = NewsSchema;