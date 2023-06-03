import globals from "../../helpers/globals.js";
import request from "../../helpers/requests.js";

/**
 * Envia uma requisicao para alternar o estado de ativacao
 * @param {Number} idCargo 
 * 
 * @returns {Object}
 */
async function ativacaoEixo(idEixo) {
    var url = `${globals.server.url}/eixo/ativacao`;
    var json = JSON.stringify({
        idEixo: idEixo
    })
    var resposta = await request.put(url, json, true);
    return resposta;
}

export default ativacaoEixo;