//Conceitos do dia 01 - Conteúdos iniciais
const exp = require("express")
const Servidor = exp()
Servidor.use(exp.json())

//Aula 03 - guardar ardados em um array
const listaComDados = []



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

Servidor.get('/entrada', (req, res)=>{
    const nome =  req.query.nome
    const idade = Number(req.query.idade)

    if (idade < 14){
        res.send(`Me desculpe ${nome}, mas o clube estudantil é para apenas maiores de 14 anos, e você tem apenas ${idade} anos. Ainda faltam ${14 - idade} ano(s) para você poder entrar.`)
    }
    else{
        res.send(`Entrada permitida ${nome}!! Clube dos ${idade} ein, logo logo já tem ${idade + 1}`)
    }
})

Servidor.get('/boasvindas/:nome', (req, res)=>{
    const nome = req.params.nome
    res.send(`Olá ${nome}, seja bem vindo ao clube dos estudantes!!`)
})

Servidor.get('/pontuacao/:nome', (req, res)=>{
    const nome = req.params.nome
    const pontos = Number(req.query.pontos)

    if (pontos === 100){
        res.send(`Parabéns ${nome}!!! Você tirou a pontuação total!! ${pontos} pontos não é para qualquer um ein kkkk`)
    }
    else if (pontos > 0 && pontos < 100) {
        res.send(`Precisa se esforçar mais ein ${nome}... Tirou apenas ${pontos} pontos. Ficaram faltando ${100 - pontos} pontos para a pontuação total`)
    }
    else if (pontos < 0 || pontos > 100 || isNaN(pontos)){
        res.send(`Confira sua resposta ${nome}! Apenas valores entre 0 e 100 serão aceitos, e ${pontos} não é um deles`)
    }
})

Servidor.get('/avaliacao/:nome', (req, res)=>{ //Sistema que recebe 3 notas e calcula uma média
    const nome = req.params.nome
    const n1 = Number(req.query.n1) 
    const n2 = Number(req.query.n2)
    const n3 = Number(req.query.n3)

    //média das 3 notas recebidas
    const media = (n1 + n2 + n3)/3
    const pontos = media.toFixed(2)

    
    if (media === 100){
        res.send(`Parece que alguém aqui vai ser médico ein kkkk Parabéns ${nome}, você tirou ${pontos}, a pontuação maxima.`)
    }
    else if (media >= 70 && media < 100){
        res.send(`Parabens ${nome}, Você foi aprovado com louvor com ${pontos} pontos`)
    }
    else if (media < 70 && media >= 40){
        res.send(`Cuidado ${nome}, Você tirou ${pontos} pontos e esta de recuperação`)
    }
    else if (media < 40){
        res.send(`Muito bem, ${nome}! Teremos um ano pela frente para nos tornarmos amigos! Você tirou ${pontos} e está de reprovado`)
    }
    else if (isNaN(pontos) || media < 0 || media > 100){
        res.send(`Negativo ${nome}, os valores devem ser notas de 0 a 100 somente`)
    }
})

Servidor.post('/cadastro', (req, res)=>{
    const nome = req.body.nome
    const turma = req.body.turma
    const idade = req.body.idade
    
    const novoCadastro = {
        nome,
        turma,
        idade
    }

    listaComDados.push(novoCadastro)

    res.send(`Bem vindo(a), ${nome}! No meu sistema consta que você tem ${idade} anos e está no ${turma}. Salvo com sucesso!!`)
})

Servidor.get('/cadastros', (req, res)=>{
    res.json(listaComDados)
})

Servidor.listen(5025, ()=>{ //Porta onde a API vai rodar
    console.log("Ouvindo, capitão! Quais são as ordens?")
})