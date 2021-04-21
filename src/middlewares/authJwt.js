import jwt from 'jsonwebtoken'
import config from '../config'
import User from '../models/User'

 export const verifyToken  = async(req, res, next) => {
     try{
         
        const token = req.headers["x-access-token"]

        console.log(token)

        //comprobamos si se envio el token
        if(!token) return res.status(403).json({message: "No token provider"})

        //extraer lo que esta en el toke
        const decoded = jwt.verify(token, config.SECRET)

        //buscamos al usuario de la extraccion de jwt
        const user = await User.findById(decoded.id , {password:0 })

        if(!user) return res.status(404).json({message: 'no user found'})

        console.log(user)
        //para continuar con la peticion y siga su curso
        next()
     }catch(error){
        return res.status(401).json({message: 'Not authorized'})
     }
}