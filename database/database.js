import pg from "pg";

export const database = new pg.Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "12345",
  port: 3434,
}); 