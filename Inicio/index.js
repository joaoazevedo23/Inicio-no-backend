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

Servidor.listen(5055, ()=>{
    console.log("Esta ouvindo?")
})