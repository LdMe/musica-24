import bandController from "./bandController.js";

async function getAll(req,res){
    const {error,data} = await bandController.getAll();
    res.json({error,data});
}

async function getById(req,res){
    const id = parseInt(req.params.id);
    console.log("id",id);
    const{error,data} = await bandController.getById(id)
    res.json({error,data});
}

async function create(req,res){
    //const {name,creation_date } = req.body;
    const {name,creation_date } = req.query;
    const {error,data} = await bandController.create({name,creation_date});
    res.json({error,data});
}

async function update(req,res){
    const id = parseInt(req.params.id);
    //const {name,creation_date } = req.body;
    const {name,creation_date } = req.query;
    const {error,data} = await bandController.update(id,{name,creation_date});
    res.json({error,data});
}

async function remove(req,res){
    const id = parseInt(req.params.id);
    const {error,data} = await bandController.remove(id);
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