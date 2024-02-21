import pg from "pg"

export const database = new pg.Pool({
    // user: DATABASE_USER,
    // host: DATABASE_HOST,
    // database: DATABASE,
    // password: PASSWORD,
    port: 343
})