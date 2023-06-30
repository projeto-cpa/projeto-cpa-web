import globals from "../../helpers/globals.js";
import request from "../../helpers/requests.js";

/**
 * Envia uma requisicao para alternar o estado de ativacao
 * @param {Number} idPergunta 
 * 
 * @returns {Object}
 */
async function ativacaoPergunta(idPergunta) {
    var url = `${globals.server.url}/pergunta/ativacao`;
    var json = JSON.stringify({
        idPergunta: idPergunta
    })
    var resposta = await request.put(url, json, true);
    return resposta;
}

export default ativacaoPergunta;