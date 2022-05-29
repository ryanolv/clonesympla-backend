const model = require('../../../src/modelLoader')

exports.read = (req, res) => {

    model.Event.findAll({

    }).then((data) => {
        res.send(data)
    }).catch((error) => {
        console.log(error)
        res.send(error)
    })
}

exports.insert = (req, res) => {

    const dados = req.body

    model.Event
        .build(dados, {
            where: {
                id: req.query.id
            }
        })
        .then((data) => {})
}