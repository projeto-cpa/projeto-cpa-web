import request from '../../helpers/requests';
import globals from '../../helpers/globals';

/**
 * Retorna a requisicao de listagem do cargo
 * 
 * @param {Number} pagina 
 * Pagina atual
 * 
 * @param {Number} quantidade 
 * Quantidade por pagina
 * 
 * @returns {Object}
 */
async function listagemCargo(pagina, quantidade) {
    pagina = Number(pagina);
    quantidade = Number(quantidade);

    if (!pagina && pagina >= 0) {
        pagina = 0;
    }

    if (!quantidade && quantidade > 0) {
        quantidade = 5;
    }

    var url = `${globals.server.url}/cargo?pagina=${pagina}&qtd=${quantidade}`;
    var resposta = await request.get(url, true);
    return resposta;
}

export default listagemCargo;
