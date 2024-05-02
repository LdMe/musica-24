const artists = [
	{
		"artist_id" : 1,
		"name" : "Lady Gaga",
		"birth_date" : null,
		"is_alive" : 1
	},
	{
		"artist_id" : 2,
		"name" : "Evaristo",
		"birth_date" : null,
		"is_alive" : 1
	},
	{
		"artist_id" : 3,
		"name" : "Nacho",
		"birth_date" : null,
		"is_alive" : 0
	}
]
async function getAll(){
    return {data:artists}
}

async function getById(id){
    const artist = artists.find(artist => artist.artist_id === id);
    if(!artist){
        return {error:"El artista no existe"};
    }
    return {data:artist};
}

async function create(artistData){
    const {birth_date,is_alive,name} = artistData;
    // get max artist_id from artists
    if(!name ){
        return {error:"Los artistas deben tener nombre!"};
    }
    const maxId = Math.max(...artists.map(artist => artist.artist_id));
    const newId= maxId + 1;
    const newArtist = {
        artist_id:newId,
        name,
        is_alive,
        birth_date
    };
    artists.push(newArtist);
    return {data:newArtist};
}

async function update(id,artistData){
    const {birth_date,is_alive,name} = artistData;
    const artist = artists.find(artist=>artist.artist_id===id);
    if(!artist){
        return {error:"No se puede modificar un artista que no existe, mazapan!"};
    }
    if(birth_date){
        artist.birth_date = birth_date;
    }
    if(is_alive !== null && is_alive!== undefined){
        artist.is_alive=is_alive
    }
    if(name){
        artist.name = name;
    }
    return {data:artist};
}

async function remove(id){
    const artistIndex = artists.findIndex(artist=>artist.artist_id===id);
    if(artistIndex === -1){
        return {error:"no se pueden borrar artistas que no existen"}
    }
    const deletedArtist = artists.splice(artistIndex,1);
    return {data:deletedArtist};
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