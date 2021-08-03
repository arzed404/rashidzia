const express = require("express")
const path = require("path")
const hbs = require("hbs")


const app = express();
const port = process.env.PORT || 80 

const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
   


    res.render('index')

  
})
app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Rashid Zia',
        errorMessage: 'Page not found.'
    })
})

app.listen( port, () => {
    console.log('Server is up on port '+port+".")
})