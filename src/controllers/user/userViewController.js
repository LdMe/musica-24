import userController from "./userController.js";

async function registerForm(req,res){
    res.render("user/register");
}
async function register(req,res) {
    const {email,password,passwordRepeat} = req.body;
    const {error,data} = await userController.register(email,password,passwordRepeat);
    if(error){
        res.render("user/register",{error});
    }
    else{
        res.redirect("/login");
    }
}
async function loginForm(req,res){
    res.render("user/login");
}
async function login(req,res) {
    const {email,password} = req.body;
    const {error,data} = await userController.login(email,password);
    if(error){
        res.render("user/login",{error});
    }
    else{
        req.session.user = data;
        res.redirect("/artist");
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