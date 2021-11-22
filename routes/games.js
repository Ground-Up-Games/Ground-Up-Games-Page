module.exports = (app) => {
    app.get('/games', (req, res) => {
        res.render('games')
    })
}