module.exports = (app) => {
    app.get('/downloads', (req, res) => {
        res.render('downloads')
    })
}