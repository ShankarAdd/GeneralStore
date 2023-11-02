const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const General = sequelize.define('general',{
    id: {
        type : Sequelize.INTEGER,
        autoIncrement : true,
        allownull : false,
        primaryKey : true
    },
    itemName: Sequelize.STRING,
    description: Sequelize.STRING,
    price: Sequelize.INTEGER,
    quantity: Sequelize.INTEGER
})
module.exports =General;