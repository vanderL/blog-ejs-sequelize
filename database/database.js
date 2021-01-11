const Sequelize = require("sequelize")

const connection = new Sequelize('blogejs', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection;