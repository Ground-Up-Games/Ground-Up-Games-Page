//Packages
const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const path = require('path')

const port = process.env.PORT || 3000
const app = express()

app.use(expressLayouts)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

//Routes
require('./routes/index')(app)
require('./routes/games')(app)
require('./routes/games/death_guns_and_slippers')(app)
require('./routes/games/lab_escape')(app)
require('./routes/games/dnaca')(app)
require('./routes/games/connect_four')(app)
require('./routes/games/wander_a_bit')(app)
require('./routes/games/minesweeper')(app)
require('./routes/games/atari_breakout')(app)
require('./routes/games/pacman')(app)
require('./routes/models')(app)
require('./routes/models/stickman')(app)
require('./routes/models/destructible_car')(app)
require('./routes/models/charles_the_cat')(app)
require('./routes/models/robot')(app)
require('./routes/models/low_poly_cars')(app)
require('./routes/models/connect_four_assets')(app)
require('./routes/models/santa_pusheen')(app)
require('./routes/models/tank')(app)
require('./routes/downloads')(app)
require('./routes/about')(app)

let message = ''

//404 Page
app.use((req, res) => {
  res.status(404).render('error404', {
    message: message,
    route: req.url.split('/')[1]
  })
})

//Dev message
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})

module.exports = app 