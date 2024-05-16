import artistController from "./artistController.js";


/**
 * @module controllers/artist/artistViewController
 */


/**
 * Retrieves all artists from the database and renders them in a list view.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {void}
 */
async function getAll(req,res){
    const {error,data} = await artistController.getAll();
    res.render("artist/list",{error,data});
}

/**
 * Retrieves an artist by ID from the database and renders the artist's details.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {void}
 */
async function getById(req,res){
    const id = parseInt(req.params.id);
    console.log("id",id);
    const{error,data} = await artistController.getById(id)
    res.render("artist/show",{error,artist:data});
}

async function createForm(req,res){
    res.render("artist/new");
}

/**
 * Async function that creates a new artist based on the provided request body data.
 *
 * @param {Object} req - The request object containing the artist details in the body
 * @param {Object} res - The response object to send the result
 * @return {void} Redirects to "/artist" page after creating the artist
 */
async function create(req,res){
    const {name,is_alive,birth_date} = req.body;
    const isAlive = is_alive === "on" ? 1 : 0;
    //const {name,is_alive,birth_date} = req.query;
    const {error,data} = await artistController.create({name,isAlive,birth_date});
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