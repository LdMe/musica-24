import artistController from "./artistController.js";

async function getAll(req,res){
    const {error,data} = await artistController.getAll();
    res.render("artist/list",{error,data});
}

async function getById(req,res){
    const id = parseInt(req.params.id);
    console.log("id",id);
    const{error,data} = await artistController.getById(id)
    res.render("artist/show",{error,artist:data});
}

async function createForm(req,res){
    res.render("artist/new");
}

async function create(req,res){
    const {name,is_alive,birth_date} = req.body;
    //const {name,is_alive,birth_date} = req.query;
    const {error,data} = await artistController.create({name,is_alive,birth_date});
    //res.json({error,data});
    res.redirect("/artist");
}
async function updateForm(req,res){
    const id = parseInt(req.params.id);
    const {error,data:artist}= await artistController.getById(id);
    res.render("artist/update",{error,artist});
}

async function update(req,res){
    const id = parseInt(req.params.id);
    const {name,is_alive,birth_date} = req.body;
    const realIsAlive = is_alive === "on" ? 1 : 0;
    const {error,data} = await artistController.update(id,{name,is_alive:realIsAlive,birth_date});
    res.redirect("/artist");
}

async function remove(req,res){
    const id = parseInt(req.params.id);
    const {error,data} = await artistController.remove(id);
    res.redirect("/artist");
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