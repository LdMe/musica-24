import artistController from "./artistController.js";

async function getAll(req,res){
    const {error,data} = await artistController.getAll();
    res.json({error,data});
}

async function getById(req,res){
    const id = parseInt(req.params.id);
    console.log("id",id);
    const{error,data} = await artistController.getById(id)
    res.json({error,data});
}

async function create(req,res){
    // const {name,is_alive,birth_date} = req.body;
    const {name,is_alive,birth_date} = req.query;
    const {error,data} = await artistController.create({name,is_alive,birth_date});
    res.json({error,data});
}

async function update(req,res){
    const id = parseInt(req.params.id);
    // const {name,is_alive,birth_date} = req.body;
    const {name,is_alive,birth_date} = req.query;
    const {error,data} = await artistController.update(id,{name,is_alive,birth_date});
    res.json({error,data});
}

async function remove(req,res){
    const id = parseInt(req.params.id);
    const {error,data} = await artistController.remove(id);
    res.json({error,data});
}



export {
    getAll,
    getById,
    create,
    update,
    remove
}

export default {
    getAll,
    getById,
    create,
    update,
    remove
}