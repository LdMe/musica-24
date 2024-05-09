import userController from "./userController.js";

async function register(req,res) {
    const {email,password,passwordRepeat} = req.body;
    const {error,data} = await userController.register(email,password,passwordRepeat);
    if(error){
        res.status(400).json({error});
    }
    else{
        res.json({data});
    }
}

async function login(req,res) {
    const {email,password} = req.body;
    const {error,data} = await userController.login(email,password);
    if(error){
        res.status(400).json({error});
    }
    else{
        res.json({data});
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