const getData = require('../data/data')

exports.users = ()=>{
    return getData.getUsers()
}