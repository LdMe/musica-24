
async function getAll(){
    return "Mostramos todas las bandas";
}

async function getById(id){
    return `Mostramos banda con id ${id}`;
}

async function create(bandData){
    const {name} = bandData;
    return `Los datos para banda nuevo son: nombre: ${name}`;
}

async function update(id,bandData){
    const {name} = bandData;
    return `Los nuevos datos para banda con id ${id} son: nombre: ${name}`;
}

async function remove(id){
    return `Borramos banda con id ${id}`;
}

export {
    getAll,
    getById,
    create,
    update,
    remove
};