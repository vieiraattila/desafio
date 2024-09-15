// Importar os pacotes
import {fastify} from 'fastify'
import { DatabasePostgres } from './database-postgres.js'

// Criação das variáveis
const server = fastify()
const database = new DatabasePostgres()

// Método POST
server.post('/videos', async (request, reply) => {

    const { title, description, duration} = request.body

    await database.create({
        title,
        description,
        duration,
    })

    console.log(database.list())

    return reply.status(201).send()
})

// Método GET
server.get('/videos', async (request) => {
    const search = request.query.search
    const videos = await database.list(search)

    return videos
})

// Método PUT
server.put('/videos/:id', async (request, reply) => {
    const videoId = request.params.id
    const { title, description, duration } = request.body

    await database.update(videoId, {
        title,
        description,
        duration,
    })

    return reply.status(204).send()
})

// Método DELETE
server.delete('/videos/:id', async (request, reply) => {
    const videoId = request.params.id

    await database.delete(videoId)

    return reply.status(204).send()
})

// Declaração da porta
server.listen ({
   port: process.env.PORT ?? 3333,
})