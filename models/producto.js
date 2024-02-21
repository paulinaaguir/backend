import {database} from "../database/database.js"
// updateProduct
export const createProducto = async (producto) =>{
    const values = [producto.referencia, producto.precio, producto.marca]
    const query = 'INSERT INTO producto (referencia, precio, marca) values ($1, $2, $3)'
    try{
        const connection = await database.connect()

        const {rows} = await connection.query(query, values)
        console.log(rows)
        return rows
    }catch(e){
        console.log(e)
        return null
    }
}

export const getAllProductos = async () =>{
   const query = 'select * from producto'
   try{
       const connection = await database.connect()
       const {rows} = await connection.query(query)
       console.log(rows)
       return rows
   }catch(e){
       console.log(e)
       return null
   }
}

export const updateProduct = async (producto) =>{
    const values = [producto.referencia, producto.precio, producto.marca]
    const query = 'update producto set precio = $2, marca = $3 where referencia = $1'
    try{
        const connection = await database.connect()

        const {rows} = await connection.query(query, values)
        console.log(rows)
        return rows
    }catch(e){
        console.log(e)
        return null
    }
}