module.exports = (app) => {
    app.get('/models/low_poly_cars', (req, res) => {
        res.render('models/low_poly_cars')
    })
}