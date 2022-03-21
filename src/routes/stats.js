const Express = require('express')
const { render } = require('express/lib/response')
const router = Express.Router()
const dataService = require('../services/dataService')

let isValidUser = false


router.get('/stats', async (req, res)=>{
    if(isValidUser){
        const users = await dataService.allStats()
        let data = {
            views: users['views'].length,
            emails: users['emails'].length,
            cv: users['cv'].length,
            git: users['git'].length,
            linkedin: users['linkedin'].length,
        }
        return res.render('stats.html', data={data})
    }
    return res.redirect('/login')
})


router.get('/login', (req, res)=>{
    return(res.render('login.html'))
})

router.get('/logout', (req, res)=>{
    isValidUser = false
    return(res.render('login.html'))
})


router.post('/login', async (req, res)=>{
    const adminpass = await dataService.users()
    const serverPass = adminpass[0]['pass']
    const userPass = req.body.pass 
    if(userPass === serverPass){
        isValidUser = true
        return res.redirect('/stats')
    }
    return res.render('login.html', data={msg: 'Pass not valid'})
})


router.post('/stats', async (req, res) =>{
    const valueToUpdate = req.query.value
    const browser = req.body.msg
    if(valueToUpdate || browser){
        await dataService.AddStats(browser, valueToUpdate)
        console.log('data add to db:' + valueToUpdate + ' -- ' + browser)
    }
    return null
})


module.exports = router