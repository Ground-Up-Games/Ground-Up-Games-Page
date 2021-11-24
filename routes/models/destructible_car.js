module.exports = (app) => {
    app.get('/models/destructible_car', (req, res) => {
        res.render('models/destructible_car')
    })
}