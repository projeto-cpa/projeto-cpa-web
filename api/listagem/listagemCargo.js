<<<<<<<< HEAD:api/listagem/EditarCargos.js
async function RequisicaoEdite() {
========
/**
 * Retorna a listagem do cargo
 * @param {Number} pagina 
 * @param {Number} quantidade 
 * @returns 
 */
async function listagemCargo(pagina, quantidade) {

    if (!pagina) {
        pagina = 0;
    }

    if (!quantidade) {
        quantidade = 5;
    }
>>>>>>>> feature/acesso:api/listagem/listagemCargo.js

    var opcoes = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'cors'
    };

    var resposta = await new Promise(function (resolver) {
<<<<<<<< HEAD:api/listagem/EditarCargos.js
        fetch('http://localhost:3005/deletar/usuario.json', opcoes).then(function (response) {
========
        fetch(`http://localhost:8080/cargo?pagina=${pagina}&qtd=${quantidade}`, opcoes).then(function (response) {
>>>>>>>> feature/acesso:api/listagem/listagemCargo.js
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

<<<<<<<< HEAD:api/listagem/EditarCargos.js
const Filtros = {
    colunas: [
        { nome: 'id', etiqueta: 'ID', tipo: 'number' },
        { nome: 'nome', etiqueta: 'Nome', tipo: 'string' },
        { nome: 'descricao', etiqueta: 'Descrição', tipo: 'string' }
    ]
};

export { Filtros, RequisicaoEdite }
========
export default listagemCargo;
>>>>>>>> feature/acesso:api/listagem/listagemCargo.js
