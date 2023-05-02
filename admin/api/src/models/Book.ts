import { Model, DataType, DataTypes } from 'sequelize'
import { sequelize } from '../instances/mysql'

export interface BookInstance extends Model {
    id: Number
    qtd_pessoas: Number
    check_in: String
    check_out: String
    cupom: String
    total: Number
    total_desconto: Number
    confirmacao: Number
    data_confirmacao: String
}

export const Book = sequelize.define<BookInstance>(
    'Book',
    {
        id: { primaryKey: true, autoIncrement: true, type: DataTypes.NUMBER },
        qtd_pessoas: { defaultValue: false, type: DataTypes.NUMBER },
        check_in: { defaultValue: false, type: DataTypes.STRING },
        check_out: { defaultValue: false, type: DataTypes.STRING },
        cupom: { defaultValue: false, type: DataTypes.STRING },
        total: { defaultValue: false, type: DataTypes.NUMBER },
        total_desconto: { defaultValue: false, type: DataTypes.NUMBER },
        confirmacao: { defaultValue: false, type: DataTypes.NUMBER },
        data_confirmacao: { defaultValue: false, type: DataTypes.STRING },
    },
    {
        tableName: 'reserva',
        timestamps: true,
    }
)
