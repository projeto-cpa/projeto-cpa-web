/*async function Requisicao() {

    var opcoes = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        mode: "cors"
    };

    var resposta = await new Promise(function (resolver) {
        fetch('http://localhost:8080/listagem/turmas', opcoes).then(function (response) {
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

const Filtros = {
    colunas: [
        { nome: 'id', etiqueta: 'ID', tipo: 'number' },
        { nome: 'nome', etiqueta: 'Nome', tipo: 'string' },
        { nome: 'descricao', etiqueta: 'Descrição', tipo: 'string' },
        { nome: 'periodo', etiqueta: 'Periodo', tipo: 'string' },
        { nome: 'curso', etiqueta: 'Curso', tipo: 'string' }
    ]
};

export { Filtros, Requisicao }*/

import request from '../../helpers/requests';
import globals from '../../helpers/globals';

/**
 * Retorna a requisicao de listagem das turmas
 * 
 * @param {Number} pagina 
 * Pagina atual
 * 
 * @param {Number} quantidade 
 * Quantidade por pagina
 * 
 * @returns {Object}
 */
async function listagemTurma(pagina, quantidade) {
    pagina = Number(pagina);
    quantidade = Number(quantidade);

    if (!pagina && pagina >= 0) {
        pagina = 0;
    }

    if (!quantidade && quantidade > 0) {
        quantidade = 5;
    }

    var url = `${globals.server.url}/turma?pagina=${pagina}&qtd=${quantidade}`;
    var resposta = await request.get(url, true);
    return resposta;
}

export default listagemTurma;
