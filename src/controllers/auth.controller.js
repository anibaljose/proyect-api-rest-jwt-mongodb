import User from '../models/User'
import jwt from 'jsonwebtoken'
import config from '../config'
import Role from '../models/Role'


//create user
export const signup = async (req, res) => {
    
    const {username, email, password, roles} = req.body;

    const newUser = new User({
        username,
        email,
        password: await User.encryptPassword(password)
    })

    if (roles){
        const foundRoles = await Role.find({name: {$in: roles}})
        newUser.roles = foundRoles.map(role => role._id)
    }else{
        const role = await Role.findOne({name : "user"})
        newUser.roles = [role._id];
    }

   const saveUser = await newUser.save();

   console.log(newUser)
   const token = jwt.sign({id: saveUser._id}, config.SECRET, {
       expiresIn: 864000 //this value is in seconds
   })

   res.status(200).json({token})
}

export const signin = async (req, res) => {
    const userFound = await User.findOne({email: req.body.email}).populate("roles") //con populate se pobla los roles con la info.
    if (!userFound) return res.status(400).json({message: "User not found"})

    const matchPassword = await User.comparePassword(req.body.password, userFound.password)

    if(!matchPassword) return res.status(401).json({token:null, message:'Invalid paassword'})

    const token = jwt.sign({id: userFound._id}, config.SECRET, {
       expiresIn: 864000 //this value is in seconds
    })

    console.log(userFound);

    // se puede escribir para resumir, 
    //res.json({token})
    res.json({token:token}) 

}