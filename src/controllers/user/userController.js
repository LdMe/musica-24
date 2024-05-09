import userModel from "../../models/userModel.js";

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
    update,
    remove
};


export default {
    getAll,
    getById,
    getByEmail,
    create,
    update,
    remove
};