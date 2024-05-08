import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

import artistModel from "./artistModel.js";

const songModel = sequelize.define("song",
    {
        song_id:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        title: {
            type:DataTypes.STRING(45),
            allowNull:false
        },
        length: {
            type:DataTypes.INTEGER.UNSIGNED,
            allowNull:false,
        },
        composer_id:{
            type:DataTypes.INTEGER.UNSIGNED,
            references:{
                model: artistModel,
                key:"artist_id"
            }
        },
        genre_id:{
            type:DataTypes.INTEGER.UNSIGNED
        }
    }
)

songModel.belongsTo(artistModel,{foreignKey:"composer_id"});
artistModel.hasMany(songModel,{as:"canciones",foreignKey:"composer_id"});

export default songModel;