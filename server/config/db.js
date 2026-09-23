import { neon } from "@neondatabase/serverless";

console.log("DB URL loaded:", process.env.DATABASE_URL ? "yes" : "NO - undefined");

const sql = neon(process.env.DATABASE_URL);

export default sql;