
async function getAll(){
    return "Mostramos todos los artistas";
}

async function getById(id){
    return `Mostramos artista con id ${id}`;
}
async function create(artistData){
    const {birth_date,is_alive,name} = artistData;
    return `Los datos para artista nuevo son: fecha de nacimiento:${birth_date}, esta viv@: ${is_alive}, nombre: ${name}`;
}
async function update(id,artistData){
    const {birth_date,is_alive,name} = artistData;
    //const birth_date = artistData.birth_date;
    return `Los nuevos datos para artista con id ${id} son: fecha de nacimiento:${birth_date}, esta viv@: ${is_alive}, nombre: ${name}`;
}

async function remove(id){
    return `Borramos artista con id ${id}`;
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