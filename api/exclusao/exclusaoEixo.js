import globals from "../../helpers/globals.js";
import request from "../../helpers/requests.js";

/**
 * Envia uma requisicao para excluir o eixo
 * 
 * @param {Number} idEixo 
 * Identificacao do eixo
 * 
 * @returns {Object}
 */
async function exclusaoEixo(idEixo) {
    var url = `${globals.server.url}/eixo`;
    var json = JSON.stringify({
        idEixo: idEixo
    });
    var resposta = await request.delete(url, json, true);
    return resposta;
}

export default exclusaoEixo;