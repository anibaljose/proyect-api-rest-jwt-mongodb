import {Router} from 'express'
const router = Router()

//este es una manera de importar
//import{createProduct, getProducts, getProductById, updateProductById, deleteProductById} from '../controllers/product.controller'

//otra forma de importar todos los metodos
import * as productCtrl from '../controllers/product.controller'

//exportar el middleware donde contiene la verificacion del token
import {authJwt} from '../middlewares'

//con solo indicarle el slash / y en app.js llamar app.use('/products', productRoute) me indicara que antes del slash va precedido
// con products
//router.get('/', (req, res) => res.json('get products'))

//cambiamos lo que esta arriba con el controlador que creamos en cada ruta
//en la rutas podemos agregar middlewere para comprobar antes de que ingesar al ruta, como el token, si es admin, moderador
//o cualquier otra cosa que queremos validar

router.get('/', [authJwt.verifyToken, authJwt.isModerator], productCtrl.getProducts)

router.post('/', [authJwt.verifyToken], productCtrl.createProduct)

router.get('/:productId', [authJwt.verifyToken], productCtrl.getProductById)

router.put('/:productId', [authJwt.verifyToken], productCtrl.updateProductById)

router.delete('/:productId', [authJwt.verifyToken, authJwt.isModerator], productCtrl.deleteProductById)

export default router;