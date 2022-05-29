const env = process.env.NODE_ENV || 'development'
const config = require('../config/config.json')[env]
const path = require('path')
let Sequelize = require('sequelize')


// Criando a conexão com o banco de dados de acordo com a configuração do config.js
let sequelize = new Sequelize(config.database, config.username, config.password, config)
let db = {}


// Criando um array do caminho dos modulos
const models = [
    '../modules/product/events',
    '../modules/product/category',
]
let l = models.length


// Importando os modelos para o sequelize
for (let i = 0; i < l; i++) {
    let model = sequelize.import(path.join(model[i]))
    db[model.name] = model
}


// Percorrendo e separando apenas o objeto que contém a propriedade associate,
// sem o "associate" o sequelize não monta uma relação!
Object.keys(db).forEach((modelName) => {
    if ('associate' in db[modelName])
    db[modelName].associate(db)
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db