
async function getAll(){
    return "Mostramos todos los generos";
}

async function getById(id){
    return `Mostramos el genero con id ${id}`;
}
async function create(genreData){
    const {name} = genreData;
    return `Los datos para el genero nuevo son: nombre:${name}, los demas estan WIP`;
}
async function update(id,genreData){
    const {name} = genreData;
    //const birth_date = artistData.birth_date;
    return `Los nuevos datos el genero con id ${id} son: Nombre:${name}`;
}

async function remove(id){
    return `Borramos genero con id ${id}`;
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