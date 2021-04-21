import {Router} from 'express'
const router = Router()

//este es una manera de importar
//import{createProduct, getProducts, getProductById, updateProductById, deleteProductById} from '../controllers/product.controller'

//otra forma de importar todos los metodos
import * as productCtrl from '../controllers/product.controller'

//exportar el middleware donde contiene la verificacion del token
import {verifyToken} from '../middlewares'

//con solo indicarle el slash / y en app.js llamar app.use('/products', productRoute) me indicara que antes del slash va precedido
// con products
//router.get('/', (req, res) => res.json('get products'))

//cambiamos lo que esta arriba con el controlador que creamos en cada ruta

router.get('/', verifyToken, productCtrl.getProducts)

router.post('/', verifyToken, productCtrl.createProduct)

router.get('/:productId', verifyToken, productCtrl.getProductById)

router.put('/:productId', verifyToken, productCtrl.updateProductById)

router.delete('/:productId', verifyToken, productCtrl.deleteProductById)

export default router;