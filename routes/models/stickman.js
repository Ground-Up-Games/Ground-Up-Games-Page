module.exports = (app) => {
    app.get('/models/stickman', (req, res) => {
        res.render('models/stickman')
    })
}