module.exports = (app) => {
    app.get('/models', (req, res) => {
        res.render('models')
    })
}