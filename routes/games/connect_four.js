module.exports = (app) => {
    app.get('/games/connect_four', (req, res) => {
        res.render('games/connect_four')
    })
}