import { Model, DataTypes } from 'sequelize'
import { sequelize } from '../instances/mysql'
import { User } from './User'

export interface FeedbackInstance extends Model {
    id: number
    pontuacao: number
    descricao: string
    status: string
}

export const Feedback = sequelize.define<FeedbackInstance>(
    'Feedback',
    {
        id: { primaryKey: true, autoIncrement: true, type: DataTypes.INTEGER },
        pontuacao: { defaultValue: false, type: DataTypes.NUMBER },
        descricao: { defaultValue: false, type: DataTypes.STRING },
        status: { defaultValue: 'pendente', type: DataTypes.STRING },
    },
    {
        tableName: 'avaliacoes',
        timestamps: true,
    }
)

// Feedback.hasOne(User, {
//     foreignKey: 'usuario_id',
//     as: 'avaliacao',
// })
