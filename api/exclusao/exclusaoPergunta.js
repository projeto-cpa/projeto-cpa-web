import globals from "../../helpers/globals.js";
import request from "../../helpers/requests.js";

/**
 * Envia uma requisicao para excluir o eixo
 * 
 * @param {Number} idPergunta 
 * Identificacao do eixo
 * 
 * @returns {Object}
 */
async function exclusaoPergunta(idPergunta) {
    var url = `${globals.server.url}/pergunta`;
    var json = JSON.stringify({
        idPergunta: idPergunta
    });
    var resposta = await request.delete(url, json, true);
    return resposta;
}

export default exclusaoPergunta;