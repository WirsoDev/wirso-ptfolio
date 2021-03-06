const getData = require('../data/data')

exports.users = ()=>{
    return getData.getUsers()
}

exports.allStats = async ()=>{
    const views = await getData.getViews()
    const emails = await getData.getEmails()
    const cv = await getData.getCv()
    const git = await getData.getGit()
    const linkedin = await getData.getLinkedin()

    let data = {
        views:views,
        emails:emails,
        cv:cv,
        git:git,
        linkedin:linkedin
    }

    return data
}

exports.addviews = (browser)=>{
    return getData.addView(browser)
}

exports.AddStats = (browser, stat)=>{
    switch(stat){
        case('li-stat'):
            return getData.addLinkedin(browser)
            break
        case('git-stat'):
            return getData.addGit(browser)
            break
        case('mail-stat'):
            return getData.addEmail(browser)
            break
        case('cv-stat'):
            return getData.addCv(browser)
            break
    }
}

exports.getViewsOrder = () => {
    return getData.getOrderViews()    

}
