module.exports = (app) => {
    const orders = require('../controller/order.controller')
    const router = require('express').Router()

    router.get('/', (req, res) => {
        res.json({
            message: "Welcome To Server Cart"
        })
    })
    router.get('/user/:id', orders.findOrder)
    router.post('/user/:id/add', orders.addToCart)
    router.delete('/user/:id/product/:product', orders.removeFromCart)

    app.use('/api/orders', router);
}