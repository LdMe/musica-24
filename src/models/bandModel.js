import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";


/**
 * Represents a band in the database.
 * @typedef {Object} Band
 * @property {number} band_id - The unique identifier for the band.
 * @property {string} name - The name of the band.
 * @property {Date} creation_date - The creation date of the band.
 */
const bandModel = sequelize.define("band",
    {
        band_id:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        name: {
            type:DataTypes.STRING(100),
            allowNull:false
        },
        creation_date:{
            type:DataTypes.DATE
        }
    }
)

export default bandModel;