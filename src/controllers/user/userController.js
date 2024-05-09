import userModel from "../../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

async function getAll() {
    try {
        const users = await userModel.findAll();
        return { data: users };
    }
    catch (error) {
        console.error(error);
        return { error: error };
    }
}

async function getById(id) {
    try {
        const user = await userModel.findByPk(id);
        if (!user) {
            return { error: "El user no existe" };
        }
        return { data: user };
    }
    catch (error) {
        console.error(error);
        return { error };
    }

}

async function getByEmail(email){
    try {
        const user = await userModel.findOne({where:{email:email}})
        return {data:user};
    } catch (error) {
        console.error(error);
        return {error};
    }
}

async function create(userData) {
    try {
        const newuser = await userModel.create(userData);
        console.log("new user",newuser);
        return {data:newuser};
    } catch (error) {
        console.error(error);
        return {error}
    }
}
async function register(email,password,passwordRepeat){
    try {
        if(!email || !password || !passwordRepeat){
            return {error:"falta email o contraseña"};
        }
        if(password !== passwordRepeat){
            return {error:"las contraseñas no coinciden"};
        }
        const {data:oldUser} = await getByEmail(email);
        console.log("old user",oldUser)
        if(oldUser){
            return {error:"el usuario ya existe"};
        }
        const hash = await bcrypt.hash(password,10);
        const userData = {
            email,
            password:hash
        }
        const newUser = await create(userData);
        return {data:newUser};
    } catch (error) {
        console.error(error);
        return {error:"ha habido un error en el registro"}
    }
}

async function login(email,password){
    try {
        if(!email || !password ){
            return {error:"falta email o contraseña"};
        }
        const {data:oldUser} = await getByEmail(email);
        if(!oldUser){
            return {error:"la combinación de usuario y contraseña es errónea"};
        }
        const isPasswordCorrect = await bcrypt.compare(password,oldUser.password);
        if(isPasswordCorrect){
            const token = jwt.sign({id:oldUser.user_id,email:oldUser.email},process.env.JWT_SECRET,{expiresIn: 60 * 60})
            return {data:"El usuario se ha logueado correctamente",token};
        }
        else{
            return {error:"la combinación de usuario y contraseña es errónea"}
        }
    } catch (error) {
        console.error(error);
        return {error:"Ha habido un error en el login"}
    }
}
async function update(id, userData) {
    try {
        const newuser = await userModel.update(userData,
            {
                where: 
                {
                    user_id:id
                }
            }
        );
        return {data:newuser};
    } catch (error) {
        console.error(error);
        return {error}
    }
   
}

async function remove(id) {
    try {
        const result = await userModel.remove(id);
        return {data:result};
    } catch (error) {
        console.error(error);
    }
    
}

export {
    getAll,
    getById,
    getByEmail,
    create,
    register,
    login,
    update,
    remove
};


export default {
    getAll,
    getById,
    getByEmail,
    create,
    register,
    login,
    update,
    remove
};