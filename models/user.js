import {database} from "../database/database.js"

export const createUser = async (user) =>{
    const values = [user.id, user.name, user.encriptedPassword, user.role, user.email, user.phone, user.cellphone]
    const query = 'INSERT INTO tdea_users (id, name, password, role, email, phone, cellphone) values ($1, $3, $4, $5, $6, $7)'
    try{
        const connection = await database.connect()
        const {rows} = await connection.query(query, values)
        return rows
    }catch(e){
        return null
    }
}

export const loginUser = async (user) =>{
    const values = [user.id]
    const query = 'select password, role from tdea_users where id = $1'
    try{
        const connection = await database.connect()

        const {rows} = await connection.query(query, values)
        return rows[0]
    }catch(e){
        // console.log(e)
        return null
    }
}