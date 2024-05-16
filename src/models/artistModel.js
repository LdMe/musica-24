import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

import bandModel from "./bandModel.js";

/**
 * Represents an artist in the database.
 * @typedef {Object} Artist
 * @property {number} artist_id - The unique identifier for the artist.
 * @property {string} name - The name of the artist.
 * @property {boolean} is_alive - Indicates if the artist is alive.
 * @property {Date} birth_date - The birth date of the artist.
 */
const artistModel = sequelize.define("artist",
    {
        artist_id:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        name: {
            type:DataTypes.STRING(45),
            allowNull:false
        },
        is_alive: {
            type:DataTypes.BOOLEAN,
            defaultValue:true
        },
        birth_date:{
            type:DataTypes.DATE
        }
    }
)

artistModel.belongsToMany(bandModel,
    {
        through:"band_has_artist",
        as:"bandas",
        foreignKey:"artist_id"
    }
);
bandModel.belongsToMany(artistModel,
    {
        through:"band_has_artist",
        as:"artistas",
        foreignKey:"band_id"
    }
);

export default artistModel;