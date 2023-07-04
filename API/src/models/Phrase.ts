import { Model, DataTypes } from "sequelize";
import { db } from "../database/database";

export interface PhraseType extends Model {
    id: number,
    txt: string,
    author: string
}

export const Phrase = db.define<PhraseType>('Phrase', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    author: {
        type: DataTypes.STRING
    },
    txt: {
        type: DataTypes.STRING
    }
}, {
    tableName:'phrases',
    timestamps: false
})