import bandModel from "../../models/bandModel.js";
import artistModel from "../../models/artistModel.js";
async function getAll() {
    try {
        const bands = await bandModel.findAll({include:"artistas"});
        return { data: bands };
    }
    catch (error) {
        console.error(error);
        return { error: error };
    }
}

async function getById(id) {
    try {
        const band = await bandModel.findByPk(id,{include:"artistas"});
        if (!band) {
            return { error: "La banda no existe" };
        }
        return { data: band };
    }
    catch (error) {
        console.error(error);
        return { error };
    }

}

async function create(bandData) {
    try {
        const newband = await bandModel.create(bandData);
        return {data:newband};
    } catch (error) {
        console.error(error);
        return {error}
    }


}

async function update(id, bandData) {
    try {
        const { name,creation_date } = bandData;
        const band  = await bandModel.findByPk(id);
        
        if (name) {
            band.name = name;
        }
        if (creation_date) {
            band.creation_date = creation_date;
        }
        const newband = await band.save();
        return {data:newband};
    } catch (error) {
        console.error(error);
        return {error}
    }
   
}

async function remove(id) {
    try {
        const band = await bandModel.findByPk(id);
        await band.destroy();
        return {data:band};
    } catch (error) {
        console.error(error);
        return {error}
    }
    
}

async function addArtist(bandId, artistId) {
    try {
        const band = await bandModel.findByPk(bandId);
        if (!band) {
            return { error: "La banda no existe" };
        }
        const artist = await artistModel.findByPk(artistId);
        console.log("----------------\nartista:",artist,"\n----------------")
        if (!artist) {
            return { error: "El artista no existe" };
        }
        console.log("añadiendo artista",artist)
        const newBand = await band.addArtista(artist);
        return {data:newBand};
    } catch (error) {
        console.error(error);
        return {error}
    }
}
async function removeArtist(bandId, artistId) {
    try {
        const band = await bandModel.findByPk(bandId);
        if (!band) {
            return { error: "La banda no existe" };
        }
        const artist = await artistModel.findByPk(artistId);
        if (!artist) {
            return { error: "El artista no existe" };
        }
        const newBand = await band.removeArtista(artist);
        return {data:newBand};
    } catch (error) {
        console.error(error);
        return {error}
    }
}

export {
    getAll,
    getById,
    create,
    update,
    addArtist,
    remove,
    removeArtist
};


export default {
    getAll,
    getById,
    create,
    update,
    addArtist,
    remove,
    removeArtist
};