module.exports = (app) => {
    app.get('/models/santa_pusheen', (req, res) => {
        res.render('models/santa_pusheen')
    })
}