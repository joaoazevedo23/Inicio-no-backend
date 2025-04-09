//Conceitos do dia 01

const exp = require("express")


const Servidor = exp()

Servidor.get('/', (req, res)=>{
    res.send('Bem vindo a API com Express')
})

Servidor.get('/info', (req, res)=>{
    res.send(
        `Nome: João Azevedo 
        Idade: 17 anos`
    )
})

Servidor.get('/usuario', (req, res)=>{
    res.json({
        nome: 'João Azevedo',
        idade: 17,
        linguagem: 'JavaScript'
    })
})

Servidor.get('/hora', (req, res)=>{
    const agora = new Date()
    const hora = agora.toLocaleTimeString()
    res.send(`Hora atual: ${hora}`)
})

Servidor.get('/soma/:a/:b', (req, res)=>{
    const a = Number(req.params.a)
    const b = Number(req.params.b)

    const respost = a + b

    res.send(`A soma de ${a} + ${b} gera como única resposta possível o resultado ${respost}`)
})



//Conceitos do dia 02

Servidor.get('/bemvindo', (req, res)=>{
    const nome = req.query.nome
    res.send(`Olá ${nome}, seja bem vindo a minha API em construção!!`)
})

Servidor.get('/verificar', (req, res)=>{
    const nome = req.query.nome
    const idade = Number(req.query.idade)
    
    if(idade < 18){
        res.send(`É mano ${nome}, você tem só ${idade} anos,e por isso é menor de idade`)
    }
    else{
        res.send(`Parabéns ${nome}! Você sobreviveu até os ${idade} anos e é maior de idade`)
    }
})


Servidor.listen(5030, ()=>{
    console.log("Ouvindo, capitão! Quais são as ordens?")
})