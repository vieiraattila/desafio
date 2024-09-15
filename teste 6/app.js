// Importar o pacote
import express from 'express'

// Criar variável
const app = express()

// Método GET
app.get ('/', (request, response ) => response.send('Hello World!'))

// Declaração da porta
app.listen (3000, () => console.log('servidor pronto'))