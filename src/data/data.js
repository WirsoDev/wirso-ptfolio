const db = require('../db/db')

exports.getUsers = () => {
    return db.query('SELECT * FROM users')
}

exports.getViews = () => {
    return db.query('SELECT * FROM views')
}

exports.getEmails = () => {
    return db.query('SELECT * FROM emails')
}

exports.getCv = () => {
    return db.query('SELECT * FROM cv')
}

exports.getGit = () => {
    return db.query('SELECT * FROM git')
}

exports.getLinkedin = () => {
    return db.query('SELECT * FROM linkedin')
}

exports.addView = (browser) => {
    return  db.query('INSERT INTO views(user_agent) VALUES($1)', [browser])
}

exports.addLinkedin = (browser) => {
    return  db.query('INSERT INTO linkedin(user_agent) VALUES($1)', [browser])
}

exports.addGit = (browser) => {
    return  db.query('INSERT INTO git(user_agent) VALUES($1)', [browser])
}

exports.addEmail = (browser) => {
    return  db.query('INSERT INTO emails(user_agent) VALUES($1)', [browser])
}

exports.addCv = (browser) => {
    return  db.query('INSERT INTO cv(user_agent) VALUES($1)', [browser])
}

