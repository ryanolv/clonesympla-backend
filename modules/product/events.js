module.exports = (sequelize, DataTypes) => {
    
    const Event = sequelize.define('Evento', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'id'
        },
        title: {
            type: DataTypes.STRING,
            field: 'titulo'
        },
        description: {
            type: DataTypes.STRING,
            field: 'descricao'
        }, 
        date: {
            type: DataTypes.DATE,
            field: 'data'
        }, 
        _: {
            freezeTableName: true,
            schema: 'ticket_system',
            tableName: 'event',
            timestamps: false,
            classMethods: {
                associate: (model) => {
                    Event.belongsTo(model.Category, { foreignKey: 'id_category' })
                }
            }
        }
    })
    return Event
}

