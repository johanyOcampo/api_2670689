const { response } = require('express');
const devolucion = require('../models/devolucion');

Devolucion = require('../models/devolucion')

const getDevolucion = async (req, res) => {
    const devolucion = await Devolucion.find(); //OBTENER TODOS LOS DOCUMENTOS DE UNA COLECCION
    res.json({
        msg: devolucion
    })
}

const postDevolucion = async (req, res) => {

    const datos = req.query //CAPTURAR DATOS DE LA URL-POSTMAN
    let mensaje = 'Insercion exitosa'

    try {
        const devolucion = new Devolucion(datos) //INSTANCIAR
        await devolucion.save() //GUARDAR EN LA BASE DE DATOS
        console.log(devolucion)
        
    } catch (error) {

        mensaje = error
        console.log(error)

    }
    res.json({
        msg: mensaje
    })
}

const putDevolucion = async (req, res) => {
    const {IdVenta, fecha, motivo, estado} = req.query //DESESTRUCTURAR
    let mensaje = ''

    try {
        const usuario = await Usuario.findOneAndUpdate({IdVenta : IdVenta}, {fecha : fecha}, {motivo : motivo}, {estado : estado})
        mensaje = 'Actualizacion exitosa'
    } catch (error) {
        mensaje = error
    }
    res.json ({
        msg : mensaje
    })
}

const deleteDevolucion = async (req, res) => {
    const {motivo} = req.query //DESESTRUCTURAR
    let mensaje = ''

    try {
        const devolucion = await Devolucion.findOneDelete ({nombre : nombre})
        mensaje = 'eliminacion exitosa'
    } catch (error) {
        mensaje = error
    }
    res.json ({
        msg : mensaje
    })
}

module.exports = {
    getDevolucion,
    postDevolucion,
    putDevolucion,
    deleteDevolucion,
}