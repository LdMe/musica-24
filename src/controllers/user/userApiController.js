import userController from "./userController.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

async function register(req,res) {
    const {email,password,passwordRepeat} = req.body;
    try {
        if(!email || !password || !passwordRepeat){
            return res.status(400).json({error:"falta email o contraseña"});
        }
        if(password !== passwordRepeat){
            return res.status(400).json({error:"las contraseñas no coinciden"});
        }
        const {data:oldUser} = await userController.getByEmail(email);
        console.log("old user",oldUser)
        if(oldUser){
            return res.status(400).json({error:"el usuario ya existe"});
        }
        const hash = await bcrypt.hash(password,10);
        const userData = {
            email,
            password:hash
        }
        const newUser = await userController.create(userData);
        res.json({data:newUser});
    } catch (error) {
        console.error(error);
        res.status(500).json({error:"ha habido un error en el registro"})
    }
}

async function login(req,res) {
    const {email,password} = req.body;
    try {
        if(!email || !password ){
            return res.status(400).json({error:"falta email o contraseña"});
        }
        const {data:oldUser} = await userController.getByEmail(email);
        if(!oldUser){
            return res.status(400).json({error:"la combinación de usuario y contraseña es errónea"});
        }
        const result = await bcrypt.compare(password,oldUser.password);
        if(result){
            const token = jwt.sign({id:oldUser.user_id,email:oldUser.email},process.env.JWT_SECRET,{expiresIn: 60 * 60})
            res.json({data:"El usuario se ha logueado correctamente",token});
        }
        else{
            res.status(401).json({error:"la combinación de usuario y contraseña es errónea"})
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({error:"Ha habido un error en el login"})
    }
}

async function getAll(req,res){
    const {data:users} = await userController.getAll();
    res.json(users);
}
export {
    register,
    login,
    getAll
}

export default {
    register,
    login,
    getAll
}