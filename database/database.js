import pg from "pg";

export const database = new pg.Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "root",
  port: 3434,
}); 