
async function getAll(){
    return "Mostramos todas las canciones";
}

async function getById(id){
    return `Mostramos cancion con id ${id}`;
}

async function create(songData){
    const {title,length,composer_id, genre_id} = songData;
    return `Los datos para cancion nueva son: titulo: ${title}, duracion: ${length}, compositor: ${composer_id}, genero: ${genre_id}`;
}

async function update(id,songData){
    const {title,length,composer_id, genre_id} = songData;
    return `Los nuevos datos para cancion con id ${id} son: titulo: ${title}, duracion: ${length}, compositor: ${composer_id}, genero: ${genre_id}`;
}

async function remove(id){
    return `Borramos cancion con id ${id}`;
}

export {
    getAll,
    getById,
    create,
    update,
    remove
}