module.exports = (app) => {
    app.get('/games/wander_a_bit', (req, res) => {
        res.render('games/wander_a_bit')
    })
}