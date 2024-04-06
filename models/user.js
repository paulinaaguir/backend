import {database} from "../database/database.js"

export const createUser = async (user) =>{
    const values = [user.id, user.name, user.encriptedPassword, user.role, user.email, user.phone]
    const query = 'INSERT INTO usuarios (id, name, "password", "role", email, phone) values ($1,$2, $3, $4, $5, $6)'
    console.log(user.encriptedPassword);
    try{
        const connection = await database.connect()
        const {rows} = await connection.query(query, values)
        await connection.release();
        console.log(rows)
        return rows
    }catch(e){
        console.log(e)
        return null
    }
}

export const loginUser = async (user) =>{
    const values = [user.id]
    const query = 'select password, role from usuarios where id = $1'
    try{
        const connection = await database.connect()

        const {rows} = await connection.query(query, values)
        await connection.release();
        return rows[0]
    }catch(e){
        // console.log(e)
        return null
    }
}

export const recoverPassword = async (user) =>{
    const values = [user.id,user.encriptedPassword]
    const query = 'update usuarios set password =$2 where id = $1'
    try{
        const connection = await database.connect()

        const {rows} = await connection.query(query, values)
        await connection.release();
        return rows
    }catch(e){
        // console.log(e)
        return null
    }
}   
