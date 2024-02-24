import {database} from "../database/database.js"

export const createUser = async (user) =>{
    const values = [user.id, user.name, user.encriptedPassword, user.role, user.email, user.phone, user.question,user.answer]
    const query = 'INSERT INTO usuarios (id, name, "password", "role", email, phone,question,answer) values ($1,$2, $3, $4, $5, $6, $7,$8)'
    console.log(user.encriptedPassword);
    try{
        const connection = await database.connect()
        const {rows} = await connection.query(query, values)
        await connection.release();
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
export const checkSecurityAnswer = async (user) =>{
    const values = [user.id]
    const query = 'select answer, question from usuarios where id = $1'
    try{
        const connection = await database.connect()
        const {rows} = await connection.query(query, values)
        await connection.release();
        return rows[0]
    }catch(e){
        return null
    }
}