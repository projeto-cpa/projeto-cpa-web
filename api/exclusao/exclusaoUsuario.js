import globals from "../../helpers/globals.js";
import request from "../../helpers/requests.js";

/**
 * Envia uma requisicao para excluir o usuario
 * 
 * @param {Number} idUsuario
 * Identificacao do usuario
 * 
 * @returns {Object}
 */
async function exclusaoUsuario(idUsuario) {
    var url = `${globals.server.url}/usuario`;
    var json = JSON.stringify({
        idUsuario: idUsuario
    });
    var resposta = await request.delete(url, json, true);
    return resposta;
}

export default exclusaoUsuario;