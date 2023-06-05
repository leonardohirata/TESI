const Fabricante = require('../model/Fabricante')

module.exports ={
    create: async (req,res)=>{
        await Fabricante.create(req.body)
        return res.redirect('/fabricantes')
    },

        list: async (_,res)=>{
            const fabricantesList = await Fabricante.findAll()
            return res.render('fabricantes/list',{fabricantesList})
        },
        form : (_,res) => res.render('fabricantes/form')
}