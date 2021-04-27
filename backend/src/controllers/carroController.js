const mongoose = require('mongoose');
const Carro = mongoose.model('Car');

module.exports = {
    async insert (req, res){
        const carro = await Carro.create(req.body).then(()=>{
            console.log("Deu certo")
            
        }).catch((err)=>{
            console.log("O erro foi: "+err)
        })

        return res.json(carro);
        
    },

    async index(req, res){


        const carro = await Carro.find(req.params);
        
        return res.json(carro);
    
    },

    async details(req, res){
        const carro = await Carro.findById(req.params.id).then(()=>{
            console.log("Deu certo")
            
        }).catch((err)=>{
            console.log("O erro foi: "+err)
        })

        return res.json(carro);
    },

    async update(req, res){
        const carro = await Carro.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(()=>{
            console.log("Deu certo")
            
        }).catch((err)=>{
            console.log("O erro foi: "+err)
        })

        return res.json(carro);
    },

    async delete(req, res){
        
        await Carro.findByIdAndRemove(req.params.id).then(()=>{
            console.log("deletado")
            
        }).catch((err)=>{
            console.log("O erro foi: "+err)
        })
        
        return res.send()
    }

}