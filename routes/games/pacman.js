module.exports = (app) => {
    app.get('/games/pacman', (req, res) => {
        res.render('games/pacman')
    })
}