
async function getAll(){
    return "Mostramos todas las bandas";
}

async function getById(id){
    return `Mostramos las bandas con id ${id}`;
}
async function create(bandData){
    const {birth_date,is_alive,name} = bandData;
    return `Los datos para la banda nueva son: fecha de creación :${creation_date}, nombre: ${name}`;
}
async function update(id,bandData){
    const {name,creation_date} = bandData;
    //const birth_date = artistData.birth_date;
    return `Los nuevos datos para la banda con id ${id} son: fecha de creación :${creation_date}, nombre: ${name}`;
}

async function remove(id){
    return `Borramos la bandacon id ${id}`;
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