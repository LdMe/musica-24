import artistModel from "../../models/artistModel.js";
import songModel from "../../models/songModel.js";
/**
 * @module controllers/artist/artistController
 */

/**
 * Retrieves all artists from the database including associated bands and songs.
 *
 * @return {Object} The data object containing the artists if successful, otherwise an error object.
 */
async function getAll() {
    try {
        const artists = await artistModel.findAll({include:["bandas","canciones"]});
        return { data: artists };
    }
    catch (error) {
        console.error(error);
        return { error: error };
    }
}


/**
 * Get artist by ID from the database.
 * @param {Number} id - The ID of the artist to retrieve.
 * @returns {Object} The artist data if found, otherwise an error object.
 */
async function getById(id) {
    try {
        
        const artist = await artistModel.findByPk(id,{include:["bandas","canciones"]});
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


/**
 * Creates a new artist record in the database using the provided artist data.
 *
 * @param {Object} artistData - The data of the artist to be created.
 * @return {Object} The newly created artist data.
 */
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
        if(artistData.name === ""){
            delete artistData.name;
        }
        const newArtist = await artistModel.update(artistData,
            {
                where: 
                {
                    artist_id:id
                }
            }
        );
        return {data:newArtist};
    } catch (error) {
        console.error(error);
        return {error}
    }
   
}

async function remove(id) {
    try {
        const artist = await artistModel.findByPk(id);
        await artist.destroy();
        return {data:artist};
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
    remove
};


export default {
    getAll,
    getById,
    create,
    update,
    remove
};