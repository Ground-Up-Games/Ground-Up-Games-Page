module.exports = (app) => {
    app.get('/models/tank', (req, res) => {
        res.render('models/tank')
    })
}