const {Sequelize, Datatypes, Model, INTEGER, DataTypes} = require('sequelize')
const path = require('path')

const sequelize = new Sequelize({
    dialect:'sqlite',
    storage: path.resolve(__dirname, '..','..','db.sqlite')
})
const Fabricante = sequelize.define('fabricante', {
    id:{
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    marca:{
        type:DataTypes.STRING(120),
        allowNull:false,
    } //não pode ser verdadeiro
})
Fabricante.sync()
module.exports= Fabricante