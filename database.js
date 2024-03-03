import postgres from "postgres";
import 'dotenv/config'

const { PGHOST, PGPORT , PGDATABASE , PGUSER , PGPASSWORD } = process.env

const url =  `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}:${PGPORT}/${PGDATABASE}`



export const sql = postgres(url , {ssl : 'prefer'})

 