import request from '../../helpers/request';

/**
 * Retorna a listagem do cargo
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

    var headers = {
        method: 'GET'
    };

    var url = `${globals.server.url}/cargo?pagina=${pagina}&qtd=${quantidade}`;

    var resposta = await request.use(url, false, headers);
    
    return resposta;

}

export default listagemCargo;
