module.exports = (app) => {
    app.get('/games/dnaca', (req, res) => {
        res.render('games/dnaca')
    })
}