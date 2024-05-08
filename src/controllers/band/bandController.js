import bandModel from "../../models/bandModel.js";

async function getAll() {
    try {
        const bands = await bandModel.findAll({include:"artistas"});
        console.log("bands",bands)
        console.log("banda1",bands[0].bandas)
        return { data: bands };
    }
    catch (error) {
        console.error(error);
        return { error: error };
    }
}

async function getById(id) {
    try {
        const band = await bandModel.findByPk(id);
        if (!band) {
            return { error: "El banda no existe" };
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
        console.log("new band",newband);
        return {data:newband};
    } catch (error) {
        console.error(error);
        return {error}
    }


}

async function update(id, bandData) {
    try {
        const { birth_date, is_alive, name } = bandData;
        const band  = await bandModel.findByPk(id);
        if (!band) {
            return { error: "No se puede modificar un banda que no existe, mazapan!" };
        }
        if (birth_date) {
            band.birth_date = birth_date;
        }
        if (is_alive !== null && is_alive !== undefined) {
            band.is_alive = is_alive
        }
        if (name) {
            band.name = name;
        }
        const newband = await bandModel.update(id,band);
        return {data:newband};
    } catch (error) {
        console.error(error);
        return {error}
    }
   
}

async function remove(id) {
    try {
        const result = await bandModel.remove(id);
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