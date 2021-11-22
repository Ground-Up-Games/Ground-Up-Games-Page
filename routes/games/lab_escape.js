module.exports = (app) => {
    app.get('/games/lab_escape', (req, res) => {
        res.render('games/lab_escape')
    })
}