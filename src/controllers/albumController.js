
async function getAll(){
    return "Mostramos todos los albumes";
}

async function getById(id){
    return `Mostramos el album con id ${id}`;
}
async function create(albumData){
    const {title,release_year,band_band_id} = albumData;
    return `Los datos para el album nuevo son: título :${title}, año de publicación: ${release_year}, y ha sido tocado por las bandas: ${band_band_id}`;
}
async function update(id,albumData){
    const {title,release_year,band_band_id} = albumData;
    //const birth_date = artistData.birth_date;
    return `Los nuevos datos para el album con id ${id} son: título :${title}, año de publicación: ${release_year}, y ha sido tocado por las bandas: ${band_band_id}`;
}

async function remove(id){
    return `Borramos el album con id ${id}`;
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