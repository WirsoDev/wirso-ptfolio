const Express = require('express')
const router = Express.Router()

router.get('/', (req, res)=>{
    return(res.render('main.html'))
})



module.exports = router