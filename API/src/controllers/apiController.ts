import { Request, Response } from "express"
import { Phrase } from "../models/Phrase"
import { Sequelize } from "sequelize"

export const findAllPhrases = async (req: Request, res: Response) => {
    try {
        const frase = await Phrase.findAll()
        res.json(frase)
    } catch (error) {
        console.log(error)
    }
}

export const createPhrase = async (req: Request, res: Response) => {
    const { txt, author } = req.body
    try {
        const novaFrase = await Phrase.create({ txt, author })
        res.json(novaFrase)
    } catch (error) {
        console.log(error)
    }
}

export const updatePhrase = async (req: Request, res: Response) => {
    const { txt, author } = req.body
    const { id } = req.params
    try {
        const updatePhrase = await Phrase.findByPk(id)
        if (updatePhrase) {
            const update = await Phrase.update({txt, author}, {where: {id}})
            res.json(update)
        } else {
            res.status(404).json({ message: 'ID não encontrada.' })
        }
    } catch (error) {
        console.log(error)
    }
}

export const deletePhrase = async (req: Request, res: Response) => {
    const { id } = req.params;
    
    try {
        const deletePhrase = await Phrase.findByPk(id);
        
        if (deletePhrase) {
            await deletePhrase.destroy();
            res.json({ message: 'Frase deletada com sucesso.' });
        } else {
            res.status(404).json({ message: 'ID não encontrada.' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Erro ao deletar a frase.' });
    }
}

export const randomPhrase = async (req: Request, res: Response) => {
    let phrase = await Phrase.findOne({
        order:[
            Sequelize.fn('RANDOM')
        ]
    })
    if(phrase){
        res.json(phrase)
    }else{
        res.json({message: "Não há frases cadastradas."})
    }
}