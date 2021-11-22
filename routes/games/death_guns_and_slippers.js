module.exports = (app) => {
    app.get('/games/death_guns_and_slippers', (req, res) => {
        res.render('games/death_guns_and_slippers')
    })
}