import { sql } from './database.js'

    await sql `
    create table videos (
        id TEXT,
        title TEXT,
        descr TEXT,
        duration INTEGER
    );
`


// async function createTable() { 
//     const create = await sql `
//     create table videos (
//         title TEXT,
//         descr TEXT,
//         duration INTEGER
//     );
// `
//     }

//     createTable()