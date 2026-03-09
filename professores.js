const express = require('express');
const app = express();

app.use(express.json());

const professores = [
    {
        id: 1,
        nome: "Bethania",
        disciplina: "Filosofia",
        anoContratacao: 2022
    },
    {
        id: 2,
        nome: "Gabriel",
        disciplina: "Ed. Fisica",
        anoContratacao: 2023
    }
];

const alunos = [
    {
        id: 1,
        nome: "Arthur Duque",
        email: "arthur@gmail.com",
    },
    {
        id: 2,
        nome: "Pedro Sperati",
        email: "pedro@gmail.com",
    },
    {
        id: 3,
        nome: "Julia Lopes",
        email: "julia@gmail.com"
    }
];

app.get("/", function(req, res) {
    res.send("Hello World!, vc conseguiu!");
});



app.get("/alunos", function(req, res) {
    const nome = req.query.nome;
    if (!nome) {
        return res.json(alunos);
    }
    const alunosFiltrados = alunos.filter(a => a.nome.toLowerCase().includes(nome.toLowerCase()));
    res.json(alunosFiltrados);
});

app.get("/alunos/:id", function(req, res) {
    const id = parseInt(req.params.id);
    const aluno = alunos.find(a => a.id == id);
    if (aluno) {
        return res.json(aluno);
    } else {
        res.status(404).json("Aluno não encontrado");
    }
});

app.post("/alunos", function(req, res) {
    const { nome, email } = req.body;
    if (!nome || !email) {
        return res.status(400).json({ erro: "Nome e email são obrigatórios!" });
    }
    const novoAluno = {
        id: alunos.length + 1,
        nome: nome,
        email: email,
    };
    alunos.push(novoAluno);
    res.status(201).json(novoAluno);
});

app.put("/alunos/:id", function(req, res) {
    const id = parseInt(req.params.id);
    const { nome, email } = req.body;
    if (!nome || !email) {
        return res.status(400).json("nome e email são obrigatorios");
    }
    const indexDoAluno = alunos.findIndex(a => a.id == id);
    if (indexDoAluno === -1) {
        return res.status(404).json("Aluno não encontrado");
    }
    alunos[indexDoAluno].email = email;
    alunos[indexDoAluno].nome = nome;
    return res.json(alunos[indexDoAluno]);
});

app.delete("/alunos/:id", function(req, res) {
    const id = parseInt(req.params.id);
    const index = alunos.findIndex(a => a.id === id);
    if (index === -1) {
        return res.status(404).json("Aluno não encontrado");
    }
    alunos.splice(index, 1);
    return res.status(204).send();
});


// Filtrar por ano 
app.get("/professores", function(req, res) {
    const ano = req.query.ano;
    if (!ano) {
        return res.json(professores);
    }
    const filtrados = professores.filter(p => p.anoContratacao == ano);
    res.json(filtrados);
});

// Criar professor
app.post("/professores", function(req, res) {
    const { nome, disciplina, anoContratacao } = req.body;
    if (!nome || !disciplina || !anoContratacao) {
        return res.status(400).json({ erro: "Nome, disciplina e ano de contratação são obrigatórios!" });
    }
    const novoProf = {
        id: professores.length + 1,
        nome: nome,
        disciplina: disciplina,
        anoContratacao: anoContratacao
    };
    professores.push(novoProf);
    res.status(201).json(novoProf);
});

// Editar professor
app.put("/professores/:id", function(req, res) {
    const id = parseInt(req.params.id);
    const { nome, disciplina, anoContratacao } = req.body;
    const index = professores.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json("Professor não encontrado");
    }

    professores[index].nome = nome || professores[index].nome;
    professores[index].disciplina = disciplina || professores[index].disciplina;
    professores[index].anoContratacao = anoContratacao || professores[index].anoContratacao;

    res.json(professores[index]);
});

// Deletar professor
app.delete("/professores/:id", function(req, res) {
    const id = parseInt(req.params.id);
    const index = professores.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json("Professor não encontrado");
    }

    professores.splice(index, 1);
    res.status(204).send();
});

app.listen(3000, function() {
    console.log("Servidor rodando na porta 3000");
});

