const Express = require('express')
const router = Express.Router()
const dataService = require('../services/dataService')


router.get('/stats', async (req, res)=>{
    const users = await dataService.users()
    console.log(users)
    return(res.render('stats.html'))
})


module.exports = router