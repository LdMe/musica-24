import bandController from "./bandController.js";

async function getAll(req,res){
    const {error,data} = await bandController.getAll();
    res.render("band/list",{error,data});
}

async function getById(req,res){
    const id = parseInt(req.params.id);
    console.log("id",id);
    const{error,data} = await bandController.getById(id)
    res.render("band/show",{error,band:data});
}

async function createForm(req,res){
    res.render("band/new");
}

async function create(req,res){
    const {name,creation_date } = req.body;
    //const {name,creation_date } = req.query;
    const {error,data} = await bandController.create({name,creation_date});
    //res.json({error,data});
    res.redirect("/band");
}

async function updateForm(req,res){
    const id = parseInt(req.params.id);
    const {error,data:band}= await bandController.getById(id);
    res.render("band/update",{error,band});
}

async function update(req,res){
    const id = parseInt(req.params.id);
    const {name,creation_date } = req.body;
    //const {name,creation_date } = req.query;
    const {error,data} = await bandController.update(id,{name,creation_date});
    //res.json({error,data});
    res.redirect("/band");
}

async function remove(req,res){
    const id = parseInt(req.params.id);
    const {error,data} = await bandController.remove(id);
    res.redirect("/band");
}

export {
    getAll,
    getById,
    create,
    createForm,
    update,
    updateForm,
    remove
}

export default {
    getAll,
    getById,
    create,
    createForm,
    update,
    updateForm,
    remove
}