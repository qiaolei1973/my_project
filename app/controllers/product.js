const _ = require('underscore');
const Product = require('../models/product')
const md5 = require('md5')
const path = require('path');
const qiniu = require('qiniu');
const multer = require('multer');
const uuidv4 = require('node-uuid');
const upload = multer({ dest: path.join(__dirname, "public/uploads/") }).single(
    "file"
);
const { accessKey, secretKey, bucket } = require('../../config/qiniuConfig');


exports.add = function (req, res) {
    var _product = req.body
    console.log('_product: ', _product);
    var product = new Product(_product)
    Product.findOne({ name: _product.name }, function (err, product) {
        if (err) {
            console.log(err)
        }
        if (product) {
            return res.send({ status: 1, err: 'duplicate' })
        } else {
            var product = new Product(_product)
            product.save(function (err, product) {
                if (err) {
                    console.log(err)
                    res.send({ status: 1, err })
                }
                res.send({ status: 0 })
            })
        }
    })
}
exports.update = function (req, res) {
    var _product = req.body.product
    var product = new Product(_product)
    Product.findById(product._id, function (err, product) {
        if (err) {
            console.log(err)
            res.send({ status: 1, err })
        }
        updateNews = _.extend(news, _news)
        var product = new Product(_product)
        product.save(function (err, product) {
            if (err) {
                console.log(err)
                return res.send({ status: 2 })
            }
            return res.send({ status: 0 })
        })
    })
}

exports.fetch = function (req, res) {
    Product.find(function (err, products) {
        if (err) {
            console.log(err)
            return res.send({ status: 2 })
        }
        console.log('products: ', products);
        res.send(products)
    })
}

exports.del = function (req, res) {
    var _id = req.body
    if (_id) {
        Product.remove({ _id }, function (err, news) {
            if (err) {
                console.log(err)
                return res.send({ status: 2 })
            }
            return res.send({ status: 0 })
        })
    }
}

exports.addImageById = function (req, res) {
    const mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
    const link = 'http://p40qv24id.bkt.clouddn.com';

    var options = {
        scope: bucket,
    };

    var putPolicy = new qiniu.rs.PutPolicy(options);
    var uploadToken = putPolicy.uploadToken(mac);

    var config = new qiniu.conf.Config();
    // 空间对应的机房
    config.zone = qiniu.zone.Zone_z1;

    var formUploader = new qiniu.form_up.FormUploader(config);
    var putExtra = new qiniu.form_up.PutExtra();

    upload(req, res, err => {
        const { file: { path,originalname }, body: { _id } } = req;
        let key = originalname;
        if(key.length > 20){
            key = `${originalname.substring(0,15)}.${originalname.split('.').pop()}`
        }
        const localFile = path;
        formUploader.putFile(uploadToken, key, localFile, putExtra, function (respErr,
            respBody, respInfo) {
            if (respErr) {
                throw respErr;
            }
            if (respInfo.statusCode == 200) {
                const qiniuPath = `${link}/${key}`;
                console.log(respBody);
                Product.update({ _id }, { $set: { pic: qiniuPath } })
                    .then(err => {
                        if (err) {
                            return res.send({ status: 1, err });
                        }
                        return res.send({ status: 0, pic: qiniuPath });
                    });
            } else {
                console.log(respInfo.statusCode);
                console.log(respBody);
            }
        });
    })
}

