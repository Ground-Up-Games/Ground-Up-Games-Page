module.exports = (app) => {
    app.get('/models/connect_four_assets', (req, res) => {
        res.render('models/connect_four_assets')
    })
}