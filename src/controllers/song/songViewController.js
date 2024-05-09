import songController from './songController.js';

async function getAll(req, res) {
    const {error,data} = await songController.getAll();
    res.render("song/list", {error,data});
}

async function getById(req, res) {
    const id = parseInt(req.params.id);
    console.log("id", id);
    const {error,data} = await songController.getById(id);
    res.render("song/show", {error, song:data});
}

async function createForm(req, res) {
    res.render("song/new");
}

async function create(req, res) {
    const {title, length, composer_id, genre_id} = req.body;
    //const {title, length, composer_id, genre_id} = req.query;
    const {error,data} = await songController.create({title, length, composer_id, genre_id});
    //res.json({error,data});
    res.redirect("/song");
}

async function updateForm(req, res) {
    const id = parseInt(req.params.id);
    const {error,data:song} = await songController.getById(id);
    res.render("song/update", {error, song});
}

async function update(req, res) {
    const id = parseInt(req.params.id);
    const {title, length, composer_id, genre_id} = req.body;
    const {error,data} = await songController.update(id,{title, length, composer_id, genre_id});
    res.redirect("/song");
}

async function remove(req, res) {
    const id = parseInt(req.params.id);
    const {error,data} = await songController.remove(id);
    res.redirect("/song");
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
