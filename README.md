# API Escola- Node.Js + Express
API RESET simples para gerenciar alunos e porfessores

## Pré requisitos- 
-Node.js instalado

## Como codar

### Instalar dependências
```bash
npm i
```

### Inciar o servidor
```bash
node index.js
```

### Abra a navegador em: `https://localhost:3000`

## Endpoints 

###Alunos

| Método | Endpoint | Descrição |
|--------| ----------|-----------|
| GET | `/alunos` | Lista todos os alunos |
| GET | `/alunos/:id` | Busca um aluno especifico |
| POST | `/alunos` | Cria um novo aluno |
| PUT | `/alunos/:id` | Atualiza um aluno |
| DELETE | `/alunos/:id` | Delete um aluno |


### Professores
| Método | Endpoint | Descrição |
|--------| ----------|-----------|
| GET | `/professores` | Lista todos os professoress |
| GET | `/professores` | Cria um professor |
| POST | `/professores` | Cria um novo aluno |
| PUT | `/professores/:id` | Atualiza um professor |
| DELETE | `/professores/:id` | Deleta um porfessor |

## Tecnologias
- Node.js
- Express

## Notas 
- Os dados são armazenados em memoria (reiniciar o serviço apaga tudo)
