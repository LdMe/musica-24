import connection from "../config/mysql.js";

async function findAll() {
    console.log("connection",connection)
    const queryString="SELECT * FROM artist";
    const [rows,fields] =await connection.query(queryString);
    console.log("find all");
    console.log("rows",rows);
    console.log("fields",fields);
    return rows;
}

async function findByPk(pk){
    const queryString="SELECT * FROM artist WHERE artist_id=?";
    const [rows,fields] = await connection.query(queryString,[pk]);
    console.log("find by pk");
    console.log("rows",rows);
    console.log("fields",fields);
    return rows[0];
}

async function create(data){
    const isAlive = data.is_alive === 'on' ? 1 : 0;
    const queryString = "INSERT INTO artist (name,is_alive,birth_date) VALUES (?,?,?)";
    const [rows,fields] = await connection.query(queryString,[data.name,isAlive,data.birth_date]);
    console.log("create");
    console.log("rows",rows);
    console.log("fields",fields);
    return rows;
}


async function update(pk,data){
    const isAlive = data.is_alive === 'on' ? 1 : 0;
    const queryString = "UPDATE artist SET name=?, is_alive=?, birth_date=? WHERE artist_id=?";
    const [rows,fields] = await connection.query(queryString,[data.name,isAlive,data.birth_date,pk]);
    console.log("update");
    console.log("rows",rows);
    console.log("fields",fields);
    return rows;
}

async function remove(pk){
    const queryString="DELETE FROM artist WHERE artist_id=?";
    const [rows,fields] = await connection.query(queryString,[pk]);
    console.log("delete");
    console.log("rows",rows);
    console.log("fields",fields);
    return rows;
}

export default {
    findAll,
    findByPk,
    create,
    update,
    remove

}

