import {randomUUID} from 'node:crypto'
import { sql } from './database.js'

export class DatabasePostgres {

    async list(search)  {
        let videos 

    if (search) {
         videos = await sql `select * from videos where title ilike ${"%" + search + "%"} `
    } else {
        videos = await sql `select * from videos`
    }

    return videos

    }

   async created(videos){
        const {title, descr , duration} = videos
        const videoId = randomUUID()

        await sql`insert into videos  (id, title , descr, duration ) VALUES (${videoId}, ${title}, ${descr}, ${duration})`

    }

    async update(id, videos) { 
        const {title, descr , duration} = videos
        
        await sql `update videos set title = ${title}, descr = ${descr}, duration = ${duration} where id = ${id}`
    }


    async delete(id){
        await sql`delete from videos where id = ${id}`

    }

}