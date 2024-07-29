const express = require('express') //import do express
app = express() //instância do express (new)

app.get('/clientes', (req, res) => {
    res.send("João, José, Aline")
})

app.get('/produtos', (req, res) => {
    res.send("Caneta, Livro, Agenda")
})

app.listen(8080)