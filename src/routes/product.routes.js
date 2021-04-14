import {Router} from 'express'
const router = Router()

//este es una manera de importar
//import{createProduct, getProducts, getProductById, updateProductById, deleteProductById} from '../controllers/product.controller'

//otra forma de importar todos los metodos
import * as productCtrl from '../controllers/product.controller'

//con solo indicarle el slash / y en app.js llamar app.use('/products', productRoute) me indicara que antes del slash va precedido
// con products
//router.get('/', (req, res) => res.json('get products'))

//cambiamos lo que esta arriba con el controlador que creamos
router.get('/', productCtrl.getProducts)

router.post('/', productCtrl.createProduct)

router.get('/:productId', productCtrl.getProductById)

router.put('/:productId', productCtrl.updateProductById)

router.delete('/:productId', productCtrl.deleteProductById)

export default router;