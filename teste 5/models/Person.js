// Importar o pacote
import mongoose from 'mongoose'

// Criação do custom model
const Person = mongoose.model('Person', {
    name: String,
    salary: Number,
    approved: Boolean,
})

// Exportação do custom model
export default Person