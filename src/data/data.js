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

