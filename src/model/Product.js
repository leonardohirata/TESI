const {Sequelize, Datatypes, Model, INTEGER, DataTypes} = require('sequelize')
const path = require('path')

const sequelize = new Sequelize({
    dialect:'sqlite',
    storage: path.resolve(__dirname, '..','..','db.sqlite')
})

//criando o modelo e seus campos
const Product = sequelize.define('product', {
    id:{
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name:{
        type:DataTypes.STRING(120),
        allowNull:false,
    } //não pode ser verdadeiro
})
Product.sync()
module.exports= Product