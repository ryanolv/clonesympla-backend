module.exports = (sequelize, DataTypes) => {

    const Category = sequelize.define('Categoria', {

        id: {
            type: DataTypes.INTEGER,
            nameCategory: DataTypes.STRING,
            field: 'categoria'
        },
        _: {
            freezeTableName: true,
            schema: 'ticket_system',
            tableName: 'category',
            timestamps: false
        }
    })
    return Category
}