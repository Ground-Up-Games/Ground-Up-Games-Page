module.exports = (app) => {
    app.get('/models/robot', (req, res) => {
        res.render('models/robot')
    })
}