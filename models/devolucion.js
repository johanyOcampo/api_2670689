const {Schema, model} = require('mongoose')//Crear una coleccion o acceder a colecciones en mongo 

const DevolucionSchema = ({
    IdVenta:{
        type: String,
        unique:true,
        required:[true, 'El id es necesario']
    },

    fecha:{
        type:String,
        required:[true, 'la fecha es necesaria'],
        
    },

    motivo: {
        type:String,
        required:[true, 'El motivo es requerido'],
        enum:['vencido', 'roto'],
    },

    estado: {
        type:Boolean,
        default:true,
    }
})


module.exports = model('Devolucion', DevolucionSchema)