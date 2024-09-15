// Importar os pacotes
import express from 'express'
import mongoose from 'mongoose'

// Criação da variável
const app = express()

// Criação do custom model
const Person = mongoose.model('Person', {
    name: String,
    salary: Number,
    approved: Boolean,
})

// Leitura JSON
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

// Método POST
app.post('/person', async (request, response) => {
    const {name, salary, approved} = request.body

    if(!name) {
        response.status(422).json({error: 'O nome é obrigatório'})
        return
    }

    const person = {
        name, 
        salary,
        approved
    }

    try {
        await Person.create(person)
        response.status(201).json({message: 'Pessoa inserida no banco com sucesso'})
    } catch (error) {
        response.status(500).json({error:error})
    }
})

// Método GET para procurar todas as entradas no banco
app.get('/person', async (request, response) => {
    try {
        const people = await Person.find()
        response.status(200).json(people)
    } catch (error) {
        response.status(500).json({error:error})
    }
})

// Método GET para procurar uma entrada no banco
app.get('/person/:id', async (request, response) => {
    const id = request.params.id

    try {
        const person = await Person.findOne({_id: id})
        response.status(200).json(person)
    } catch (error) {
        response.status(500).json({error:error})
    }
})

// Método PATCH para atualizar uma entrada no banco
app.patch('/person/:id', async (request, response) => {
    const id = request.params.id
    const {name, salary, approved} = request.body

    const person = {
        name, 
        salary,
        approved,
    }

    try {
        const updatedPerson = await Person.updateOne({_id:id}, person)
        response.status(200).json(person)
    } catch (error) {
        response.status(500).json({error:error})
    }
})

// Método DELETE para deletar uma entrada no banco
app.delete('/person/:id', async (request, response) => {
    const id = request.params.id
    const person = await Person.findOne({_id:id})

    try {
        await Person.deleteOne({_id:id})
        response.status(200).json({message: 'Usuário deletado com sucesso'})
    } catch (error) {
        response.status(500).json({error:error})
    }
})

// Login e senha do MongoDBAtlas
const DB_USER = 'attila'
const DB_PASSWORD = 'senhaapicluster'

// Conexão com o MongoDB
mongoose
    .connect(
        `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.oynqj.mongodb.net/bancodaapi?retryWrites=true&w=majority&appName=APICluster`
    )
    .then(() => {
        console.log('Conectamos ao MongoDB')
        app.listen(3000)
    })
    .catch((err) => console.log(err))

// mongodb+srv://attila:senhaapicluster@apicluster.oynqj.mongodb.net/bancodaapi?retryWrites=true&w=majority&appName=APICluster