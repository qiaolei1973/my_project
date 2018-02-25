var User = require('../app/controllers/user')
var News = require('../app/controllers/news')
var Product = require('../app/controllers/product')

module.exports = function (app) {
    app.post('/news/addNews', News.addNews)
    app.post('/news/updateNews', News.updateNews)
    app.post('/news/fetchNews', News.fetchNews)
    app.post('/news/delNews', News.delNews)

    app.use('/admin',User.access)
    app.post('/user/__singup', User.singup)
    app.post('/login', User.login)
    app.post('/logout', User.logout)

    app.post('/product/addProduct', Product.add)
    app.post('/product/addImage', Product.addImageById)
    app.post('/product/fetchProducts', Product.fetch)
    app.post('/product/updateProduct', Product.update)
    app.post('/product/delProduct', Product.del)
}
