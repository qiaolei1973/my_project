var mongoose = require('mongoose')

var ProductSchema = new mongoose.Schema({
    name: {
        unique: true,
        type: String,
        required:true,
    },
    content: {
        unique: false,
        type: String
    },
    pic: {
        type:'string'
    },
    params: [{ key: String, value: String }],
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

ProductSchema.pre('save', function (next) {
    if (this.isNew) {
        this.meta.createAt = this.meta.updateAt = Date.now()
    } else {
        this.meta.updateAt = Date.now()
    }
    next();
})

ProductSchema.statics = {
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

module.exports = ProductSchema;