import artistModel from "../../models/artistModel.js";

async function getAll() {
    try {
        const artists = await artistModel.findAll();
        return { data: artists };
    }
    catch (error) {
        console.error(error);
        return { error: error };
    }
}

async function getById(id) {
    try {
        const artist = await artistModel.findByPk(id);
        if (!artist) {
            return { error: "El artista no existe" };
        }
        return { data: artist };
    }
    catch (error) {
        console.error(error);
        return { error };
    }

}

async function create(artistData) {
    try {
        const newArtist = await artistModel.create(artistData);
        console.log("new artist",newArtist);
        return {data:newArtist};
    } catch (error) {
        console.error(error);
        return {error}
    }


}

async function update(id, artistData) {
    try {
        const { birth_date, is_alive, name } = artistData;
        const artist  = await artistModel.findByPk(id);
        if (!artist) {
            return { error: "No se puede modificar un artista que no existe, mazapan!" };
        }
        if (birth_date) {
            artist.birth_date = birth_date;
        }
        if (is_alive !== null && is_alive !== undefined) {
            artist.is_alive = is_alive
        }
        if (name) {
            artist.name = name;
        }
        const newArtist = await artistModel.update(id,artist);
        return {data:newArtist};
    } catch (error) {
        console.error(error);
        return {error}
    }
   
}

async function remove(id) {
    try {
        const result = await artistModel.remove(id);
        return {data:result};
    } catch (error) {
        console.error(error);
    }
    
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