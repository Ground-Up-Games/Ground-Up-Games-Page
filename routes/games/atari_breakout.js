module.exports = (app) => {
    app.get('/games/atari_breakout', (req, res) => {
        res.render('games/atari_breakout')
    })
}