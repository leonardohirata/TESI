const Product = require('../model/Product')
const Fabricante = require('../model/Fabricante')

module.exports = {
    home:(_,res) => res.render('index'),

    total: async (_,res) => {
        const products = await Product.findAll()
        const fabricantes = await Fabricante.findAll()
        return res.render('total',{fabricantes, products})
}}