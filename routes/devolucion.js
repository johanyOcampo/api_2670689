const {Router} = require('express')

const route = Router()

//Listar todos los datos
const {getDevolucion, postDevolucion, putDevolucion, deleteDevolucion} = require ('../controllers/devolucion') //IMPORTAR EL CONTROLADOR


route.get('/', getDevolucion)
route.post('/', postDevolucion)
route.put('/', putDevolucion)
route.delete('/', deleteDevolucion)





module.exports = route 