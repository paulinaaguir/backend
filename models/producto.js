import {database} from "../database/database.js"
// updateProduct
export const createProducto = async (producto) =>{
    const values = [producto.referencia, producto.nombre, producto.precio, producto.marca, producto.tipo]
    const query = 'INSERT INTO productos (referencia, nombre, precio, marca,tipo) values ($1, $2, $3, $4,$5)'
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

export const getAllProductos = async () =>{
   const query = 'select * from productos'
   try{
       const connection = await database.connect()
       const {rows} = await connection.query(query)
       await connection.release();
       console.log(rows)
       return rows
   }catch(e){
       console.log(e)
       return null
   }
}

export const updateProduct = async (producto) =>{
    const values = [producto.referencia, producto.precio, producto.marca, producto.nombre,producto.tipo]
    const query = 'update productos set tipo= $5,nombre=$4, precio = $2, marca = $3 where referencia = $1'
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
export const deleteProduct = async (data) =>{
    const query = 'delete from productos where referencia=$1'
    const values = [data.referencia];
    try{
        const connection = await database.connect()
        const {rows} = await connection.query(query,values)
        await connection.release();
        console.log(rows)
        return rows
    }catch(e){
        console.log(e)
        return null
    }
 }