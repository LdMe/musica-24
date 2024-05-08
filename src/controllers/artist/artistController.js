import artistModel from "../../models/artistModel.js";
import songModel from "../../models/songModel.js";
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