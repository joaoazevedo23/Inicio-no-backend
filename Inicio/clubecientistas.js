const express = require("express")
const Server = express()
Server.use(express.json())

const clubeDosCientistas = []

Server.post('/cientista', (req, res)=>{
    const nome = req.body.nome
    const idade = Number(req.body.idade)
    const area = req.body.area
    
    const novoCadastro = {
        nome,
        idade,
        area
    }

    clubeDosCientistas.push(novoCadastro)

    res.send(`Cadastro realizado com sucesso de ${nome}, idade: ${idade} e da area: ${area}.`) 
})


Server.get('/cientistas', (req, res)=>{
    res.json(clubeDosCientistas)
})

Server.get('/cientistas/maiores', (req, res)=>{
    const cientistasMaiores = clubeDosCientistas.filter(cientista => cientista.idade >= 18)

    if (cientistasMaiores.length ===0){
        res.send("Nenhum cientista maior de 18 anos cadastrado!")
    }
    else{
        res.json(cientistasMaiores)
    }
})


Server.listen(8080, ()=>{
    console.log("Server 2 rodando, chefe!")
})