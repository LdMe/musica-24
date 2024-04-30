
async function getAll(){
    return "Mostramos todos los generos";
}

async function getById(id){
    return `Mostramos el genero con id ${id}`;
}
async function create(genreData){
    const {name} = genreData;
    return `Los datos para el genero nuevo son: nombre :${name}`;
}
async function update(id,genreData){
    const {name} = genreData;
    return `Los nuevos datos para el genero con ${id} son: name :${name}.`;
}

async function remove(id){
    return `Borramos el genero con id ${id}`;
}

export {
    getAll,
    getById,
    create,
    update,
    remove
};


export default {
    getAll,
    getById,
    create,
    update,
    remove
};