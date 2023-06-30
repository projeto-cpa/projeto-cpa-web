import globals from "../../helpers/globals.js";
import request from "../../helpers/requests.js";

/**
 * Envia uma requisicao para alternar o estado de ativacao
 * @param {Number} idUsuario
 * 
 * @returns {Object}
 */
async function ativacaoUsuario(idUsuario) {
    var url = `${globals.server.url}/usuario/ativacao`;
    var json = JSON.stringify({
        idUsuario: idUsuario
    })
    var resposta = await request.put(url, json, true);
    return resposta;
}

export default ativacaoUsuario;