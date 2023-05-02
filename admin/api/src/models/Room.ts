import { Model, DataTypes } from 'sequelize'
import { sequelize } from '../instances/mysql'

export interface RoomInstance extends Model {
    id: number
    nome: string
    tipo: string
    status: string
    descricao: string
    preco: number
    imagem: string
}

export const Room = sequelize.define<RoomInstance>(
    'Room',
    {
        id: { primaryKey: true, autoIncrement: true, type: DataTypes.INTEGER },
        nome: { type: DataTypes.STRING },
        tipo: { type: DataTypes.STRING },
        status: { type: DataTypes.STRING },
        descricao: { type: DataTypes.STRING },
        preco: { type: DataTypes.NUMBER },
        imagem: { type: DataTypes.STRING },
    },
    {
        tableName: 'acomodacoes',
        timestamps: false,
    }
)
