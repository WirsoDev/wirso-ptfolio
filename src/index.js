const Express = require('express')
const nunjucks = require('nunjucks')


const app = Express()

app.use(Express.static('public'))

nunjucks.configure('src/views', {
    express: app,
    noCache: true
})


app.use('/', require('./routes/main'))
app.use('/', require('./routes/stats'))


// start server
var port = 3000
app.listen(process.env.PORT || port, () => { console.log('Server up at port - ' + port) })
