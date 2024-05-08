import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

import bandModel from "./bandModel.js";

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
        foreignKey:"band_id"
    }
);
bandModel.belongsToMany(artistModel,
    {
        through:"band_has_artist",
        as:"artistas",
        foreignKey:"artist_id"
    }
);

export default artistModel;