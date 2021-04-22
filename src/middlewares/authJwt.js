import jwt, { decode } from 'jsonwebtoken'
import config from '../config'
import Role from '../models/Role';
import User from '../models/User'

 export const verifyToken  = async(req, res, next) => {
     try{
         
        const token = req.headers["x-access-token"]

        //console.log(token)

        //comprobamos si se envio el token
        if(!token) return res.status(403).json({message: "No token provider"})

        //extraer lo que esta en el toke
        const decoded = jwt.verify(token, config.SECRET)
        req.userId = decoded.id;

        //buscamos al usuario de la extraccion de jwt
        const user = await User.findById(req.userId , {password:0 })

        if(!user) return res.status(404).json({message: 'no user found'})

        //console.log(user)
        //para continuar con la peticion y siga su curso
        next()
     }catch(error){
        return res.status(401).json({message: 'Not authorized'})
     }
};

export const isModerator = async (req, res, next) => {
   //como en el anterior metodo verifytoken tengo el req.userID, puedo obtenerlo aqui tambien
   const user = await User.findById(req.userId)
   const roles = await Role.find({_id: {$in: user.roles}})

   for (let i = 0; i < roles.length; i++){
      if (roles[i].name === "moderator"){
         next()
         return;
      }
   }

   return res.status(403).json({message: "required moderator role"})
}

export const isAdmin = async (req, res, next) => {

   //como en el anterior metodo verifytoken tengo el req.userID, puedo obtenerlo aqui tambien
   const user = await User.findById(req.userId)
   const roles = await Role.find({_id: {$in: user.roles}})

   for (let i = 0; i < roles.length; i++){
      if (roles[i].name === "admin"){
         next()
         return;
      }
   }

   return res.status(403).json({message: "required administrator role"})
   
}