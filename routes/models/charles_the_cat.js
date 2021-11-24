module.exports = (app) => {
    app.get('/models/charles_the_cat', (req, res) => {
        res.render('models/charles_the_cat')
    })
}