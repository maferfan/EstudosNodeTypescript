import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

export const db = async () => {
    try {
        console.log("Conectando ao MongoDB..")
        await mongoose.connect(process.env.MONGO_URL as string)
        console.log('MongoDB conectado.')
    } catch (error) {
        console.log("Erro de conexão MONGODB: ", error)
    }
}