import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const userModel = sequelize.define("user",
{
    user_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull:false,
        unique:true
    },
    password: {
        type:DataTypes.STRING(80),
        allowNull:false
    }
});

export default userModel;