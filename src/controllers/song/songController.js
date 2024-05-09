import songModel from "../../models/songModel.js";

async function getAll() {
    try {
        const songs = await songModel.findAll();
        return { data: songs };
    }
    catch (error) {
        console.error(error);
        return { error: error };
    }
}

async function getById(id) {
    try {
        const song = await songModel.findByPk(id);
        if (!song) {
            return { error: "Song not found" };
        }
        return { data: song };
    }
    catch (error) {
        console.error(error);
        return { error };
    }
}

async function create(songData) {
    try {
        const newSong = await songModel.create(songData);
        return { data: newSong };
    }
    catch (error) {
        console.error(error);
        return { error };
    }
}

async function update(id, songData) {
    try {
        if(songData.title === "") {
            delete songData.title;
        }
        const newSong = await songModel.update(songData, 
            {
                 where: 
                 { 
                    song_id: id
                 }
            }
      );
        return { data: newSong };
    }catch (error) {
        console.error(error);
        return { error };
    }
}

async function remove(id) {
    try {
        const result = await songModel.remove(id)
        return { data: result };
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