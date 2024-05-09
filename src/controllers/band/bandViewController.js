import bandController from "./bandController.js";
import artistController from "../artist/artistController.js";

async function getAll(req,res){
    const {error,data} = await bandController.getAll();
    res.render("band/list",{error,data});
}

async function getById(req,res){
    const id = parseInt(req.params.id);
    const{error,data:band} = await bandController.getById(id);
    const {data:artists} = await artistController.getAll();
    res.render("band/show",{error,band,artists});
}

async function createForm(req,res){
    res.render("band/new");
}

async function create(req,res){
    const {name,creation_date} = req.body;
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
    const {name,creation_date} = req.body;
    console.log("creation_date",creation_date);
    const {error,data} = await bandController.update(id,{name,creation_date});
    if(error){
        console.error(error);
    }
    res.redirect("/band");
}

async function remove(req,res){
    const id = parseInt(req.params.id);
    const {error,data} = await bandController.remove(id);
    res.redirect("/band");
}

async function addArtist(req,res){
    const bandId = parseInt(req.params.id);
    const artistId = parseInt(req.body.artist_id);
    const {error,data} = await bandController.addArtist(bandId,artistId);
    if(error){
        console.error(error);
    }
    res.redirect("/band/"+bandId);
}

async function removeArtist(req,res){
    const bandId = parseInt(req.params.id);
    const artistId = parseInt(req.body.artist_id);
    const {error,data} = await bandController.removeArtist(bandId,artistId);
    if(error){
        console.error(error);
    }
    res.redirect("/band/"+bandId);
}

export {
    getAll,
    getById,
    create,
    createForm,
    update,
    updateForm,
    remove,
    addArtist,
    removeArtist
}

export default {
    getAll,
    getById,
    create,
    createForm,
    update,
    updateForm,
    remove,
    addArtist,
    removeArtist
}