module.exports = (app) => {
    app.get('/games/minesweeper', (req, res) => {
        res.render('games/minesweeper')
    })
}