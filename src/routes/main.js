const Express = require('express')
const router = Express.Router()
const dataService = require('../services/dataService')

router.get('/', async (req, res)=>{


    const userAgent = req.headers['user-agent']
    let browserName
    if(userAgent.match(/chrome|chromium|crios/i)){
        browserName = "chrome";
      }else if(userAgent.match(/firefox|fxios/i)){
        browserName = "firefox";
      }  else if(userAgent.match(/safari/i)){
        browserName = "safari";
      }else if(userAgent.match(/opr\//i)){
        browserName = "opera";
      } else if(userAgent.match(/edg/i)){
        browserName = "edge";
      }else{
        browserName="No browser detection";
      }
    await dataService.addviews(browserName)


    return(res.render('main.html'))
})



module.exports = router