import userController from "./userController.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

async function registerForm(req,res){
    res.render("user/register");
}
async function register(req,res) {
    const {email,password,passwordRepeat} = req.body;
    try {
        if(!email || !password || !passwordRepeat){
            return res.render("user/register",{error:"falta email o contraseña"});
        }
        if(password !== passwordRepeat){
            return res.render("user/register",{error:"las contraseñas no coinciden"});
        }
        const {data:oldUser} = await userController.getByEmail(email);
        console.log("old user",oldUser)
        if(oldUser){
            return res.render("user/register",{error:"el usuario ya existe"});
        }
        const hash = await bcrypt.hash(password,10);
        const userData = {
            email,
            password:hash
        }
        const newUser = await userController.create(userData);
        res.redirect("/");
    } catch (error) {
        console.error(error);
        res.render("user/register",{error:"ha habido un error en el registro"})
    }
}
async function loginForm(req,res){
    res.render("user/login");
}
async function login(req,res) {
    const {email,password} = req.body;
    try {
        if(!email || !password ){
            return res.render("user/login",{error:"falta email o contraseña"});
        }
        const {data:oldUser} = await userController.getByEmail(email);
        if(!oldUser){
            return res.render("user/login",{error:"la combinación de usuario y contraseña es errónea"});
        }
        const result = await bcrypt.compare(password,oldUser.password);
        if(result){
            req.session.user = {email,id:oldUser.user_id};
            res.redirect("/artist");
        }
        else{
            res.render("user/login",{error:"la combinación de usuario y contraseña es errónea"})
        }
    } catch (error) {
        console.error(error);
        res.render("user/login",{error:"Ha habido un error en el login"})
    }
}

async function logout(req,res){
    req.session.user = null;
    res.redirect("/artist");
}

async function getAll(req,res){
    const {data:users} = await userController.getAll();
    res.json(users);
}
export {
    register,
    registerForm,
    login,
    loginForm,
    logout,
    getAll
}

export default {
    register,
    registerForm,
    login,
    loginForm,
    logout,
    getAll
}