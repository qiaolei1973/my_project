var mongoose = require('mongoose');

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
    if (this.isNew) {
        this.meta.createAt = this.meta.updateAt = Date.now()
    } else {
        this.meta.updateAt = Date.now()
    }
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