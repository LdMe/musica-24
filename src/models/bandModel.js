import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";


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