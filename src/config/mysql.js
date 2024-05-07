import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

async function createConnection(){
    const connection = await mysql.createConnection(
        {
            host: process.env.MYSQL_HOST,
            port: 3306,
            user:process.env.MYSQL_USER,
            password:process.env.MYSQL_PASSWORD,
            database:process.env.MYSQL_DATABASE
        }
    )
    console.log("conexión satisfactoria con la base de datos!");
    return connection;
}
const connection = await createConnection();

export default connection