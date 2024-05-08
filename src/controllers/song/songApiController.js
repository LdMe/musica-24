import songController from "./songController.js";

async function getAll(req,res){
    const {error,data} = await songController.getAll();
    res.json({error,data});
}

async function getById(req,res){
    const id = parseInt(req.params.id);
    console.log("id",id);
    const{error,data} = await songController.getById(id)
    res.json({error,data});
}

async function create(req,res){
    //const {title, length } = req.body;
    const {title, length } = req.query;
    const {error,data} = await songController.create({title, length});
    res.json({error,data});
}

async function update(req,res){
    const id = parseInt(req.params.id);
    //const {title, length } = req.body;
    const {title, length } = req.query;
    const {error,data} = await songController.update(id,{title, length});
    res.json({error,data});
}

async function remove(req,res){
    const id = parseInt(req.params.id);
    const {error,data} = await songController.remove(id);
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