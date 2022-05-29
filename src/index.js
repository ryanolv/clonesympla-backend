const express = require("express")

const app = express()
const port = 3000

app.post('/users', (req, res) => {
    
})


app.listen(port, () => {
    console.log(`Backend rodando na porta ${port}`)
    
})