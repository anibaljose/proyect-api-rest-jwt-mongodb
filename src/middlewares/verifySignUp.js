import {ROLES} from '../models/Role'
import User from '../models/User'

export const checkDuplicateUsernamaOrEmail = async (req, res , next) => {
    const user = await User.findOne({username: req.body.username})

    if (user) return res.status(400).json({message: "the user already exist"})

    const email = await User.findOne({email: req.body.email})

    if (email) return res.status(400).json({message: "the email already used"})

    next();
}

export const checkRolesExisted = (req, res , next) => {
    if (req.body.roles){
        for(let i=0; i < req.body.roles.length; i++){
            if (!ROLES.includes(req.body.roles[i])){
                return res.status(400).json({
                    message: `Role ${req.body.roles[i]} doesn't exists`
                })
            }
        }
    }

    next();
}