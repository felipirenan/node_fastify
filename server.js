

import { fastify } from "fastify";
import { DatabasePostgres } from "./database-postgres.js";

const server = fastify()

const database = new DatabasePostgres()

server.get('/videos', async (request) =>{

    const search = request.query.search

    const videos = await database.list(search)

    return videos
})



server.post('/videos', async (request, reply) =>{
   const {title, descr, duration} = request.body

   await database.created({
    title,
    descr,
    duration
   })

   return reply.status(201).send()
})

server.put('/videos/:id', async (request, reply) =>{
    const videoID = request.params.id 
    const {title, descr, duration} = request.body

   await database.update(videoID,{
        title,
        descr,
        duration
    })

    return reply.status(201).send()
})

server.delete('/videos/:id', async (request, reply) =>{
    const videoID = request.params.id

    await database.delete(videoID)

    return reply.status(204).send()


})

server.listen({
    port : 3333
})