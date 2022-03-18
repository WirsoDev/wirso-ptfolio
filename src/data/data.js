const db = require('../db/db')

exports.getUsers = () => {
    return db.query('SELECT * FROM users')
}