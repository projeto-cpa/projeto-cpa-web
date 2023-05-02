<<<<<<<< HEAD:api/listagem/DeletarCargos.js
async function RequisicaoDelete() {
========
async function listagemPergunta() {
>>>>>>>> feature/acesso:api/listagem/listagemPergunta.js

    var opcoes = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        mode: "cors"
    };

    var resposta = await new Promise(function (resolver) {
<<<<<<<< HEAD:api/listagem/DeletarCargos.js
        fetch('http://localhost:3005/deletar/usuario.json', opcoes).then(function (response) {
========
        fetch('http://localhost:8080/pergunta', opcoes).then(function (response) {
>>>>>>>> feature/acesso:api/listagem/listagemPergunta.js
            if (response.ok) {
                return response.json();
            } else {
                resolver({ sucesso: false });
            }
        }).then(function (data) {
            resolver(data);
        });
    });

    return resposta;

}

<<<<<<<< HEAD:api/listagem/DeletarCargos.js
const Filtros = {
    colunas: [
        { nome: 'id', etiqueta: 'ID', tipo: 'number' },
        { nome: 'nome', etiqueta: 'Nome', tipo: 'string' },
        { nome: 'descricao', etiqueta: 'Descrição', tipo: 'string' }
    ]
};

export { Filtros, RequisicaoDelete }
========

export default listagemPergunta
>>>>>>>> feature/acesso:api/listagem/listagemPergunta.js
